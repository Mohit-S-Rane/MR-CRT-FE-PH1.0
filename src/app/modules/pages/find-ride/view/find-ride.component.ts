import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, NgForm, Validators } from '@angular/forms';
import { MsrAlertType } from '@msr/components/alert';
import { AuthService } from 'app/core/auth/auth.service';
import { msrAnimations } from '@msr/animations';


@Component({
    selector     : 'find-ride',
    templateUrl  : './find-ride.component.html',
    styleUrls    : ['./find-ride.component.scss'],
    animations   : msrAnimations,
    encapsulation: ViewEncapsulation.None
})
export class FindRideComponent
{
    formFieldHelpers: string[] = [''];
    @ViewChild('comingSoonNgForm') comingSoonNgForm: NgForm;

    alert: { type: MsrAlertType; message: string } = {
        type   : 'success',
        message: ''
    };
    comingSoonForm: UntypedFormGroup;
    showAlert: boolean = false;
    imgUrl: string;

    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        private _formBuilder: UntypedFormBuilder
    )
    {
        this.imgUrl = 'Mercedes_Benz_GLK';      //default
        // this.imgUrl = 'Land_Rover_Defender';
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Create the form
        this.comingSoonForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Sign in
     */
    register(): void
    {
        // Return if the form is invalid
        if ( this.comingSoonForm.invalid )
        {
            return;
        }

        // Disable the form
        this.comingSoonForm.disable();

        // Hide the alert
        this.showAlert = false;

        // Do your action here...
        // Emulate server delay
        setTimeout(() => {

            // Re-enable the form
            this.comingSoonForm.enable();

            // Reset the form
            this.comingSoonNgForm.resetForm();

            // Set the alert
            this.alert = {
                type   : 'success',
                message: 'You have been registered to the list.'
            };

        }, 1000);
    }

    switchImgage(selectedImageName){
        this.imgUrl = selectedImageName;
    }
}
