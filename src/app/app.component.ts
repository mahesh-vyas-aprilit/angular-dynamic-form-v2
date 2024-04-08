import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  NgZone,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { STEP_ITEMS } from './constants/multi-step-form';
import { TranslateService } from '@ngx-translate/core';
import { defaultLocale, locales } from 'src/i18n';
import { REAL_ESTATE_STEP_ITEMS } from './constants/real-estate-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnChanges {
  @HostBinding('attr.dir') dir: 'rtl' | 'ltr';
  formContent: any;
  formData: any;
  activeStepIndex!: number;
  currentLocale: string;
  user!: { firstName: string; lastName: string };
  welcome!: string;
  usernameLabel!: string;
  passwordLabel!: string;
  selectedFormType!: number;

  formTypes = [
    { id: 1, name: 'Multi-Step Form' },
    { id: 2, name: 'Real Estate Form' },
  ];

  constructor(
    protected translate: TranslateService,
    private cd: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    translate.addLangs(locales);
    translate.setDefaultLang(defaultLocale);
    translate.use(defaultLocale);
    this.dir = 'ltr';
    this.currentLocale = this.translate.currentLang;
    this.translate.onLangChange.subscribe((event) => {
      this.dir = event.lang === 'ar' ? 'rtl' : 'ltr';
    });
    this.selectedFormType = 1;
    console.log(this.selectedFormType);
  }

  toggleLanguage() {
    const currentLang = this.translate.currentLang;
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(nextLang);
  }

  ngOnInit(): void {
    this.user = { firstName: 'Mahesh', lastName: 'Vyas' };

    this.welcome = this.translate.instant('welcomeMessage', {
      firstName: this.user.firstName,
    });

    this.translate
      .get(['login.username', 'login.password'])
      .subscribe((translations) => {
        this.usernameLabel = translations['login.username'];
        this.passwordLabel = translations['login.password'];
      });

    this.selectedFormType = 2;
    this.updateFormContent();
    this.formData = {};
  }

  updateFormContent(): void {
    this.ngZone.run(() => {
      if (this.selectedFormType === 1) {
        this.formContent = STEP_ITEMS;
        // console.log('fdfd', this.formContent);
      } else if (this.selectedFormType === 2) {
        this.formContent = REAL_ESTATE_STEP_ITEMS;
        // console.log('dfffddsf', this.formContent);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedFormType']) {
      // The selectedFormType property has changed
      this.updateFormContent();
    }
  }

  // onFormTypeChange(event: Event): void {
  //   const selectedValue = (event.target as HTMLSelectElement).value;
  //   this.selectedFormType = Number(selectedValue);

  //   if (Number(selectedValue) === 1) {
  //     // Multi-Step Form
  //     this.formContent = STEP_ITEMS;
  //   } else if (Number(selectedValue) === 2) {
  //     // Real Estate Form
  //     this.formContent = REAL_ESTATE_STEP_ITEMS;
  //   }

  //   // this.cd.detectChanges();
  // }
  onFormTypeChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedFormType = Number(selectedValue);
    this.updateFormContent();
    this.cd.detectChanges();
  }

  onFormSubmit(formData: any): void {
    this.formData = formData;

    // post form data here
    // alert(JSON.stringify(this.formData));
    console.log('data => ', this.formData);
  }
}
