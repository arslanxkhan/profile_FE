import { Component } from '@angular/core';
import { ProfileDto } from '../core/models/profileDto';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AppEventsService } from '../core/appServices/app-events.service';
import { ProfileModalComponent } from '../shared/modal/profile/profile.component';
import { ProfileService } from '../core/openapi/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  profiles: ProfileDto[] = [];

  constructor(
    private profileService: ProfileService,
    private modalService: NgbModal,
    private appEventService: AppEventsService
  ) {}

  ngOnInit(): void {
    this.getAll();

    this.appEventService.getAllProfiles.subscribe((x) => {
      this.getAll();
    });
  }

  getAll() {
    this.profileService.apiProfileGet().subscribe((x) => {
      this.profiles = x.data;
    });
  }

  delete(profileId: string | undefined) {
    if (!profileId) return;

    Swal.fire({
      icon: 'error',
      title: 'Do you want to delete this profile?',
      showCancelButton: true,
      confirmButtonText: 'Yes! Delete it',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.apiProfileIdDelete({ id: profileId }).subscribe(
          (x) => {
            var i = this.profiles.findIndex((x) => x.id == profileId);
            if (i >= 0) this.profiles.splice(i, 1);
          },
          () => {
            // handle error
          }
        );
      }
    });
  }

  details(item: ProfileDto) {
    const modalRef = this.modalService.open(ProfileModalComponent);
    modalRef.componentInstance.profile = Object.assign({}, item);
    modalRef.componentInstance.isDetails = true;
  }

  openUpdateDialog(item: ProfileDto) {
    const modalRef = this.modalService.open(ProfileModalComponent);
    modalRef.componentInstance.profile = Object.assign({}, item);
    modalRef.componentInstance.isDetails = false;
  }

  openAddDialog() {
    const modalRef = this.modalService.open(ProfileModalComponent);
    modalRef.componentInstance.profile = {};
    modalRef.componentInstance.isDetails = false;
  }
}
