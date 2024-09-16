import type { StoryObj } from '@storybook/react';
import PegaUidCalendar from './index';

export default {
  title: 'Widgets/Calendar',
  argTypes: {
    dataPage: {
      table: {
        disable: true
      }
    },
    getPConnect: {
      table: {
        disable: true
      }
    }
  },
  component: PegaUidCalendar
};

const setPCore = () => {
  (window as any).PCore = {
    getComponentsRegistry: () => {
      return {
        getLazyComponent: (f: string) => f
      };
    },
    getEnvironmentInfo: () => {
      return {
        getTimeZone: () => 'local'
      };
    },
    getEvents: () => {
      return {
        getCaseEvent: () => {
          return {
            ASSIGNMENT_SUBMISSION: 'ASSIGNMENT_SUBMISSION'
          };
        }
      };
    },
    getPubSubUtils: () => {
      return {
        subscribe: () => {
          /* nothing */
        },
        unsubscribe: () => {
          /* nothing */
        }
      };
    },
    getSemanticUrlUtils: () => {
      return {
        getResolvedSemanticURL: () => {
          return undefined;
        },
        getActions: () => {
          return {
            ACTION_OPENWORKBYHANDLE: 'openWorkByHandle'
          };
        }
      };
    },
    getDataApiUtils: () => {
      return {
        getData: () => {
          return Promise.resolve({
            data: {
              data: [
                {
                  pyGUID: 'A-1004',
                  Subject: 'Conference',
                  CompleteDay: true,
                  SerieRepeat: 'wöchentlich',
                  SerieEndDate: '2024-12-31',
                  EndTime: '2024-09-03T11:00:00.000Z',
                  StartTime: '2024-09-03T10:00:00.000Z',
                  Type: 'Sammel',
                  Sammeltermin: {
                    pzInsKey: 'Sammeltermin A-1004',
                    Address: {
                      Strasse: 'Max-Joseph-Platz',
                      Hausnummer: '2',
                      PLZ: 80539,
                      Ort: 'München'
                    }
                  }
                },
                {
                  pyGUID: 'A-1005',
                  Subject: 'Town hall',
                  pxCreateOpName: 'Marc Doe',
                  EndTime: '2024-09-03T18:00:00.000Z',
                  StartTime: '2024-09-03T17:00:00.000Z',
                  Type: 'Sammel',
                  Sammeltermin: {
                    pzInsKey: 'Sammeltermin A-1005',
                    Address: {
                      Strasse: 'Max-Joseph-Platz',
                      Hausnummer: '2',
                      PLZ: 80539,
                      Ort: 'München'
                    }
                  }
                },
                {
                  Category: 'in person',
                  EndTime: '2024-09-06T10:00:00.000Z',
                  StartTime: '2024-09-06T11:00:00.000Z',
                  pyGUID: 'A-999',
                  pyLabel: 'James Smith',
                  Type: 'Termin',
                  Termin: {
                    pzInsKey: 'Termin A-999',
                    Beratungsart: 'Folgeberatung',
                    Contact: {
                      FirstName: 'James',
                      LastName: 'Smith',
                      FullName: 'James Smith',
                      Salutation: 'Herr',
                      'Mobile Nr.': '0123456789',
                      'E-mail': 'james.smith@candidate.com'
                    }
                  }
                },
                {
                  StartTime: '2024-09-10T09:00:00.000Z',
                  EndTime: '2024-09-10T10:00:00.000Z',
                  pyGUID: 'A-1003', // only for "Termin" and "Sammel" | Abwesend (off) and Verfügbar (available) won't be cases
                  Participants: ['John Doe'], // NEW
                  Type: 'Termin',
                  Termin: {
                    pzInsKey: 'Termin A-1003',
                    Beratungsart: 'Folgeberatung',
                    Contact: {
                      FirstName: 'John',
                      LastName: 'Doe',
                      FullName: 'John Doe',
                      Salutation: 'Herr',
                      'Mobile Nr.': '0123456789',
                      'E-mail': 'john.doe@candidate.com'
                    }
                  }
                },
                {
                  EndTime: '2024-09-11T11:00:00.000Z',
                  StartTime: '2024-09-11T10:00:00.000Z',
                  pyGUID: 'A-1002',
                  pyLabel: 'Joe Smith Long long long long long name',
                  Type: 'Termin',
                  Termin: {
                    pzInsKey: 'Termin A-1002',
                    Beratungsart: 'Folgeberatung',
                    Contact: {
                      FirstName: 'Joe',
                      LastName: 'Smith',
                      FullName: 'Joe Smith',
                      Salutation: 'Herr',
                      'Mobile Nr.': '0123456789',
                      'E-mail': 'joe.smith@candidate.com'
                    }
                  }
                },
                {
                  EndTime: '2024-09-12T15:00:00.000Z',
                  StartTime: '2024-09-12T14:00:00.000Z0',
                  pyGUID: 'A-1001',
                  Type: 'Termin',
                  Termin: {
                    pzInsKey: 'Termin A-1001',
                    Beratungsart: 'Erstberatung',
                    Contact: {
                      FirstName: 'Jane',
                      LastName: 'Doe',
                      FullName: 'Doe',
                      Salutation: 'Frau',
                      'Mobile Nr.': '0123456789',
                      'E-mail': 'jane.doe@candidate.com'
                    }
                  }
                },
                {
                  EndTime: '2024-09-05T15:30:00.000Z',
                  StartTime: '2024-09-05T14:30:00.000Z',
                  pyGUID: 'A-1000',
                  pyDescription: 'Install a boiler\n',
                  Type: 'Termin',
                  Termin: {
                    pzInsKey: 'Termin A-1000',
                    Beratungsart: 'Bewerbungsabgabe',
                    Contact: {
                      FirstName: 'Marc',
                      LastName: 'Zuckerberg',
                      FullName: 'Marc Zuckerberg',
                      Salutation: 'Herr',
                      'Mobile Nr.': '0123456789',
                      'E-mail': 'marc.zuckerberg@candidate.com'
                    }
                  }
                },
                {
                  StartTime: '2024-09-17T11:00:00.000Z',
                  EndTime: '2024-09-17T12:00:00.000Z',
                  Type: 'Verfügbar',
                  CompleteDay: true,
                  pyGUID: 'A-1010'
                },
                {
                  StartTime: '2024-09-18T08:30:00.000Z',
                  EndTime: '2024-09-18T09:30:00.000Z',
                  Type: 'Verfügbar',
                  pyGUID: 'A-1006'
                },
                {
                  StartTime: '2024-09-12T13:00:00.000Z',
                  EndTime: '2024-09-12T18:00:00.000Z',
                  Type: 'Verfügbar',
                  pyGUID: 'A-1007'
                },
                {
                  StartTime: '2024-09-12T08:00:00.000Z',
                  EndTime: '2024-09-12T10:30:00.000Z',
                  Subject: 'Training',
                  Type: 'Abwesend',
                  pyGUID: 'A-1008'
                },
                {
                  StartTime: '2024-09-19T13:00:00.000Z',
                  EndTime: '2024-09-19T18:00:00.000Z',
                  pxCreateOpName: 'Marc Doe',
                  Subject: 'Training',
                  Type: 'Abwesend',
                  pyGUID: 'A-1009'
                },
                {
                  StartTime: '2024-09-20T15:00:00.000Z',
                  EndTime: '2024-09-120T18:00:00.000Z',
                  pxCreateOpName: 'Marc Doe',
                  Type: 'Verfügbar',
                  CompleteDay: true,
                  pyGUID: 'A-1010'
                }
              ]
            }
          });
        }
      };
    }
  };
};

type Story = StoryObj<typeof PegaUidCalendar>;
export const Default: Story = {
  render: args => {
    setPCore();
    const props = {
      ...args,
      getPConnect: () => {
        return {
          getActionsApi: () => {
            return {
              openWorkByHandle: () => {
                /* nothing */
              },
              createWork: (className: string) => {
                // eslint-disable-next-line no-alert
                alert(`Create case type with className:${className}`);
              },
              updateFieldValue: () => {
                /* nothing */
              },
              triggerFieldChange: () => {
                /* nothing */
              },
              showCasePreview: () => {
                /* nothing */
              }
            };
          },
          ignoreSuggestion: () => {
            /* nothing */
          },
          acceptSuggestion: () => {
            /* nothing */
          },
          setInheritedProps: () => {
            /* nothing */
          },
          resolveConfigProps: () => {
            /* nothing */
          }
        };
      }
    };
    return <PegaUidCalendar {...props} />;
  },
  args: {
    heading: 'Heading',
    createClassname: 'Work-Class1',
    defaultViewMode: 'Monthly',
    nowIndicator: true,
    weekendIndicator: true,
    dataPage: ''
  }
};
