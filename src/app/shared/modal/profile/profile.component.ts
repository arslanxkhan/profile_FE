import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpEventType,
} from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AppEventsService } from 'src/app/core/appServices/app-events.service';
import { AppConfig } from 'src/app/core/constant/appConfig';
import { ProfileDto } from 'src/app/core/models/profileDto';
import { ProfileService } from 'src/app/core/openapi/services';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileModalComponent implements OnInit {
  constructor(
    public activeModal: NgbActiveModal,
    private appEventsService: AppEventsService,
    private profileService: ProfileService,
    private http: HttpClient
  ) {}

  profileForm: FormGroup = new FormGroup({});

  // when null it means profile is going to be add other wise update
  @Input()
  profile!: ProfileDto;
  @Input() isDetails: boolean = false;

  title: string = 'Add Profile';
  SaveBtnText: string = 'Save';

  file: File | null = null;
  allowedExtensions = ['jpg', 'jpeg', 'png'];
  fileError: string | null = null;

  ngOnInit() {
    if (this.isDetails && this.profile?.id) this.title = 'Details';

    if (!this.isDetails && this.profile?.id) {
      this.title = 'Update Profile';
      this.SaveBtnText = 'Update';
    }
    this.createNewForm();
  }

  private createNewForm() {
    this.profileForm = new FormGroup({
      name: new FormControl(
        { value: this.profile?.name, disabled: this.isDetails },
        [Validators.required]
      ),
      email: new FormControl(
        {
          value: this.profile?.email,
          disabled:
            this.isDetails ||
            (this.profile?.email != null && this.profile?.email != undefined),
        },
        [Validators.required]
      ),
      phone: new FormControl(
        { value: this.profile?.phone, disabled: this.isDetails },
        [Validators.required]
      ),
      address: new FormControl(
        { value: this.profile?.address, disabled: this.isDetails },
        [Validators.required]
      ),
    });
  }

  onFileSelected(event: Event): void {
    this.fileError = null;
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.file = input.files[0];
    }
    if (this.file != null) {
      var fileEx = this.getFileExtension(this.file.name);
      var checkEx = this.allowedExtensions.includes(fileEx);
      if (!checkEx) {
        this.file = null;
        this.fileError = `Invalid file type. Allowed types are: ${this.allowedExtensions.join(
          ', '
        )}`;
      }
    }
  }

  getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }

  submitFile(id: string) {
    if (this.file) {
      const formData = new FormData();
      formData.append('incomingFile', this.file, this.file.name);

      this.http
        .post(AppConfig.ApiUrl + '/api/profile/image/' + id, formData, {
          reportProgress: true,
          observe: 'events',
        })
        .subscribe(
          (res) => {
            // display msg
          },
          (error: HttpErrorResponse) => {
            console.error('File upload failed!', error);
          }
        );
    }
  }

  submit() {
    if (!this.profileForm.valid) return;

    if (!this.profile?.id) {
      this.profileService
        .apiProfilePost({ body: this.profileForm.value })
        .subscribe(
          (x) => {
            this.appEventsService.getAllProfiles.emit();
            this.activeModal.dismiss();
            this.submitFile(x.data.id);
          },
          (err) => {
            this.submitErrorHandler(err);
          }
        );
    } else {
      var data = this.profileForm.value;
      data.email = this.profile.email;
      this.profileService
        .apiProfileIdPut({ id: this.profile?.id, body: data })
        .subscribe(
          (x) => {
            this.appEventsService.getAllProfiles.emit();
            this.activeModal.dismiss();
            this.submitFile(this.profile?.id);
          },
          (err) => {
            this.submitErrorHandler(err);
          }
        );
    }
  }

  private submitErrorHandler(err: any) {
    if (
      err?.error?.errors?.Name != null ||
      err?.error?.errors?.Name != undefined
    ) {
      const control = this.profileForm.get('name');
      if (control) {
        const currentErrors = control.errors || {};
        var error = Array.isArray(err?.error?.errors?.Name)
          ? err?.error?.errors?.Name[0]
          : err?.error?.errors?.Name;
        const customError = error ? { customError: error } : null;

        control.setErrors({ ...currentErrors, ...customError });
      }
    }

    if (
      err?.error?.errors?.Email != null ||
      err?.error?.errors?.Email != undefined
    ) {
      const control = this.profileForm.get('email');
      if (control) {
        const currentErrors = control.errors || {};
        var error = Array.isArray(err?.error?.errors?.Email)
          ? err?.error?.errors?.Email[0]
          : err?.error?.errors?.Email;
        const customError = error ? { customError: error } : null;

        control.setErrors({ ...currentErrors, ...customError });
      }
    }

    if (
      err?.error?.errors?.Phone != null ||
      err?.error?.errors?.Phone != undefined
    ) {
      const control = this.profileForm.get('phone');
      if (control) {
        const currentErrors = control.errors || {};
        var error = Array.isArray(err?.error?.errors?.Phone)
          ? err?.error?.errors?.Phone[0]
          : err?.error?.errors?.Phone;
        const customError = error ? { customError: error } : null;

        control.setErrors({ ...currentErrors, ...customError });
      }
    }

    if (
      err?.error?.errors?.Address != null ||
      err?.error?.errors?.Address != undefined
    ) {
      const control = this.profileForm.get('address');
      if (control) {
        const currentErrors = control.errors || {};
        var error = Array.isArray(err?.error?.errors?.Address)
          ? err?.error?.errors?.Address[0]
          : err?.error?.errors?.Address;
        const customError = error ? { customError: error } : null;

        control.setErrors({ ...currentErrors, ...customError });
      }
    }
  }
}
