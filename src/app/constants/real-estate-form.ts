const DATA_STEP_1 = {
  establishmentNumber: {
    type: 'number',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'The establishment’s national number',
  },
  licenceNumber: {
    type: 'number',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'Licence number',
  },
  dateOfRegistration: {
    type: 'date',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'Date of registration',
  },
  arabicOffice: {
    type: 'text',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'Office name(Arabic)',
  },
  englishOffice: {
    type: 'text',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'Office name(English)',
  },
};
const DATA_STEP_2 = {
  password: {
    type: 'password',
    validations: {
      required: true,
      pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$/,
    },
    errors: {
      required: 'Required!',
      pattern: 'please enter secure password!',
    },
    placeholder: 'Password',
  },
  confirmPassword: {
    type: 'text',
    validations: {
      required: true,
      pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\$&*~]).{8,}$/,
    },
    errors: {
      required: 'Required!',
      pattern: 'please enter secure password!',
    },
    placeholder: 'Password Confirmation',
  },
  nameOfCommissioner: {
    type: 'text',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'Name of the commissioner',
  },
  nationalNumberOfCommissioner: {
    type: 'number',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'National number of the commissioner',
  },
  landlinePhoneNumber: {
    type: 'number',
    validations: {
      required: true,
      pattern: /^\d{10}$/,
    },
    errors: {
      required: 'Required!',
      pattern: 'Please enter a valid landline number',
    },
    placeholder: 'Phone number',
  },
  cellPhoneNumber: {
    type: 'number',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'Phone number',
  },
  email: {
    type: 'email',
    validations: {
      required: true,
    },
    errors: {
      required: 'Required!',
    },
    placeholder: 'Enter email',
  },
};

const DATA_STEP_3 = {
  authorizationLetter: {
    type: 'file',
    validations: {},
    errors: {},
    placeholder: 'Proof',
  },
  establishedCertificate: {
    type: 'file',
    validations: {},
    errors: {},
    placeholder: 'Proof',
  },
};

const DATA_STEP_4 = {
  otp: {
    type: 'number',
    validations: {
      required: true,
      pattern: /^\d{4}$/,
    },
    errors: {
      required: 'This field can not be left blank',
      pattern: 'Please enter a valid otp',
    },
    placeholder: 'One Time Password',
  },
};

const REAL_ESTATE_STEP_ITEMS = [
  { label: 'Step 1', data: DATA_STEP_1 },
  { label: 'Step 2', data: DATA_STEP_2 },
  { label: 'Step 3', data: DATA_STEP_3 },
  { label: 'Step 4', data: DATA_STEP_4 },
  { label: 'Review & Submit', data: {} },
];

export { REAL_ESTATE_STEP_ITEMS };
