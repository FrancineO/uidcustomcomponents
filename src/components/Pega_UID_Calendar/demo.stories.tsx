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
          return new Promise(resolve =>
            setTimeout(
              () =>
                resolve({
                  data: {
                    fetchDateTime: '2024-09-30T14:41:40.071Z',
                    pxObjClass: 'Pega-API-DataExploration-Data',
                    resultCount: 83,
                    data: [
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-16T07:30:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-16T06:30:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              Typ: 'Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceClass: 'BW-KommC-Data-TerminTyp',
                                pySourceType: 'Lookup'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Klara',
                            FullName: 'Klara Fall',
                            LastName: 'Fall',
                            Salutation: 'Frau'
                          }
                        },
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '2',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '96ec4ec8-257d-4a92-8453-88138475a638',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-5017',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-16T15:00:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-16T06:30:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '2',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: '68306a32-5691-4577-9460-9cc870b6deac',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          pxSaveDateTime: null,
                          DisplayOrder: 2,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          Typ: 'Telefon',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-17T11:30:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-17T08:30:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'c13114e0-8283-4c20-81bb-b5c4ac96f5e4',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-18T10:00:00.000Z',
                        CompleteDay: true,
                        StartTime: '2024-09-17T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Täglich',
                        Subject: 'Urlaub',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Abwesend',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: '9eb75139-6ad6-4d73-b885-19bc6a84e22a',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-19T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Täglich',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: '8b2a09f3-86c7-4c83-8005-c59829fd52fc',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T06:15:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-19T05:15:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pxUpdateOpName: 'Andrzej Fudala',
                              Typ: 'Präsenzberatung',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceClass: 'BW-KommC-Data-TerminTyp',
                                pySourceType: 'Lookup'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '8fbbff2b-32e1-48d7-99dd-2ccbfe55edc0',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7007',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T06:15:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-19T05:15:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pxUpdateOpName: 'Andrzej Fudala',
                              Typ: 'Präsenzberatung',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'eb366bfc-f6d4-4923-b8ae-937b46f92654',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-6025',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T08:30:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-19T07:30:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              Typ: 'Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Folgeberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Klara',
                            FullName: 'Klara Fall',
                            LastName: 'Fall',
                            Salutation: 'Frau'
                          }
                        },
                        SerieRepeat: 'Täglich',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: '513874f6-3d33-400d-b66c-5b895c28fac8',
                        TerminID: 'BW-KOMMC-WORK-GRP1 Ter-3227',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T08:45:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-19T07:45:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              Typ: 'Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'c53ee1e4-b193-4381-9358-6aec12f6ffac',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-6025',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T09:00:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-19T08:30:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              Typ: 'Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Bewerbungsabgabe (nur Präsenzberatung)',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Manuel',
                            FullName: 'Manuel Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: 'Täglich',
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: 'ccfdc5e0-a661-4f24-8b2f-41cd29f3a772',
                        TerminID: 'BW-KOMMC-WORK-GRP1 Ter-3228',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T09:45:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-19T08:45:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              Typ: 'Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceClass: 'BW-KommC-Data-TerminTyp',
                                pySourceType: 'Lookup'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: 'Täglich',
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: '6addf247-3f4a-499d-a9ad-182ff64f80b5',
                        TerminID: 'BW-KOMMC-WORK-GRP1 Ter-6009',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T13:00:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-19T12:00:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              Typ: 'Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceClass: 'BW-KommC-Data-TerminTyp',
                                pySourceType: 'Lookup'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Klara',
                            FullName: 'Klara Fall',
                            LastName: 'Fall',
                            Salutation: 'Frau'
                          }
                        },
                        SerieRepeat: 'Täglich',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: 'e8108167-18f9-4dcc-aabe-07de6236ca6a',
                        TerminID: 'BW-KOMMC-WORK-GRP1 Ter-3213',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-20T14:00:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-20T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Täglich',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: '05323f95-29c1-49dc-bab4-0fbf256a505b',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-20T06:30:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-20T05:30:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              Typ: 'Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'f062e852-c4f9-4281-9a2f-238fb9ae4b15',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7008',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-20T07:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-20T06:00:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              Typ: 'Präsenzberatung',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Bine',
                            FullName: 'Bine Maja',
                            LastName: 'Maja',
                            Salutation: 'Frau'
                          }
                        },
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'cecdecd4-ffd6-4bb7-b402-f3caf439a2c5',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7005',
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-20T10:00:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-09-20T08:30:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Täglich',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: 'Arzttermin',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Abwesend',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: 'c056a183-b043-4768-a736-bf42868a1789',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          DisplayOrder: 2,
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          Typ: 'Telefon',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pxCommitDateTime: null,
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '433ee84e-32d7-4e3b-b102-79820c0459b4',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 3,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pxUpdateOpName: 'Anna Szarawara',
                          Typ: 'Online',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'ea5d47ad-2db4-455c-9f69-bb4e9c76ab5c',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Webexlink: null,
                          DisplayOrder: 999,
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          Beschreibung: 'Außenstelle BMVG',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          Typ: 'Außenstelle',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'cbb26935-aa9b-43a7-ad4c-913e4c68346b',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144374740046pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '9865618b-f07b-4685-a018-b1502738c15c',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '272086d3-e1f2-4b96-a6d5-00179c2ef32f',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          pxSaveDateTime: null,
                          DisplayOrder: 3,
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOpName: 'Anna Szarawara',
                          Typ: 'Online',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'eadb4d25-0b36-434c-a6dd-2edf319c6de2',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144401620570pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '1f9fe463-11b8-4854-aa48-1d02349588ea',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 999,
                          Webexlink: null,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          Beschreibung: 'Außenstelle BMVG',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          Typ: 'Außenstelle',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '5445d442-87e1-4e62-8822-5db355d6301c',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 999,
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          Beschreibung: 'Außenstelle BMVG',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'd00bfd13-b1fd-459e-85b3-afb14dc6578b',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144416712692pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'c1956641-1fd5-4ae2-a775-bd63702658ac',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'd7eeba48-f0bb-4c3e-9a84-d48566cfd16a',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 2,
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          Typ: 'Telefon',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pxCommitDateTime: null,
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-19T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-09-27T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'ca9dd9ce-38f5-403d-8937-b7f0fdf68556',
                        TerminID: null,
                        MonthDisplayText: '2024_09'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 3,
                          Webexlink: null,
                          pxSaveDateTime: null,
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          Typ: 'Online',
                          pxUpdateOpName: 'Anna Szarawara',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T15:30:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T03:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'a2530c77-e7a3-459e-89bd-5100f4f02077',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 2,
                          pxSaveDateTime: null,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          Typ: 'Telefon',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pxCommitDateTime: null,
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T15:30:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T03:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '2c2f0c8e-44e6-4f3f-adc7-acf1eecf0e05',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144438896848pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T15:30:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T03:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '3c6560be-987f-4d0f-a894-73cf08bfc704',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T15:30:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T03:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '7aed2e8a-cab9-4ce6-b759-f9fb10b6c60c',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T12:45:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T12:15:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              Typ: 'Präsenzberatung',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceClass: 'BW-KommC-Data-TerminTyp',
                                pySourceType: 'Lookup'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '11e68e2f-bed5-4ee7-998e-3b1c2ea82a6d',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-6048',
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          Webexlink: null,
                          DisplayOrder: 3,
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pxUpdateOpName: 'Anna Szarawara',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          Typ: 'Online',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T14:30:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T13:30:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              Typ: 'Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            },
                            {
                              Order: 2,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:53:14.121Z',
                              pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                              pzPageNameHash: '_pa11426144473671110pz',
                              Typ: 'Telefon',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Telefon',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:53:14.121Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Telefon'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            },
                            {
                              Order: 3,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:53:17.858Z',
                              pzLoadTime: 'September 30, 2024 at 2:03:03 PM GMT',
                              pzPageNameHash: '_pa11423827717186768pz',
                              Typ: 'Online',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Online',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:53:17.858Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Online'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'cb842861-1a53-4677-8311-5b4cfb9afc1f',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7020',
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 999,
                          Webexlink: null,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          Beschreibung: 'Außenstelle BMVG',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '52cbbb4e-1bca-4044-a117-4ffe78c8ec28',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 2,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          Typ: 'Telefon',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'd1f70554-997c-4eb6-8a64-a402df8c2dc9',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxSaveDateTime: null,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 3,
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOpName: 'Anna Szarawara',
                          Typ: 'Online',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'df7f8561-89ed-43c8-8eb9-24f8f7afabb3',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'd87a273c-4bea-4897-9f94-0509a2338445',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144497943387pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '5c374b8a-9299-4702-bed3-3836d0dcff58',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxSaveDateTime: null,
                          DisplayOrder: 999,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          Beschreibung: 'Außenstelle BMVG',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          Typ: 'Außenstelle',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'a39f722e-6442-4682-8c83-22a6a4f1cf66',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 2,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Telefon',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pxCommitDateTime: null,
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '3109a789-df5c-4060-9e62-3250f01129d3',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'bfa63ec7-6ad2-479c-8879-fc0f6487bc58',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 3,
                          pxSaveDateTime: null,
                          Webexlink: null,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          Typ: 'Online',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOpName: 'Anna Szarawara',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '4b285711-a441-44f4-ad0b-059f514207c7',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144524325372pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-09-30T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-01T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '3',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '54c63171-5149-49ff-9391-56ba7a35e835',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T17:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T07:30:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: 'Vertretung XYZ',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'b4cecb66-4473-47f3-bde9-b4b71ea19fe5',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 999,
                          Webexlink: null,
                          pxSaveDateTime: null,
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          Beschreibung: 'Außenstelle BMVG',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          Typ: 'Außenstelle',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T17:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T07:30:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: 'Vertretung XYZ',
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '5f794332-b04d-4936-8574-04d401feef43',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144550627428pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T17:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T07:30:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        Subject: 'Vertretung XYZ',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'cb0da3f2-eca9-481b-b7fb-938e478da136',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 2,
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          Typ: 'Telefon',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T17:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T07:30:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: 'Vertretung XYZ',
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'bade94b2-6f1b-4eb3-a745-6d138b4849e1',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 3,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOpName: 'Anna Szarawara',
                          Typ: 'Online',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T17:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T07:30:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: 'Vertretung XYZ',
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '1c2fd017-a3ad-47ac-9f1d-2ffbc92ec366',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T09:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T08:00:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              Typ: 'Präsenzberatung',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '9cbb5112-8945-4e44-b1d0-f5df3eda8f5e',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7018',
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T11:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T10:00:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pxUpdateOpName: 'Andrzej Fudala',
                              Typ: 'Präsenzberatung',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '09610596-c4c0-42e0-b8a3-013b0ea05801',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7019',
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T15:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T14:00:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              Typ: 'Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceClass: 'BW-KommC-Data-TerminTyp',
                                pySourceType: 'Lookup'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '73ee5640-5ce8-4956-b5e2-b84a1b926d1c',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7022',
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-02T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-02T15:00:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxSaveDateTime: null,
                              pxUpdateSystemID: 'pega-tc',
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              Typ: 'Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '4',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'a5fea24f-cba9-4342-af95-f9a48b9cef3a',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7023',
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T15:00:00.000Z',
                        CompleteDay: false,
                        StartTime: '2024-10-03T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Täglich',
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: '9ff571a5-78b7-416a-94b3-e436465d51d6',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 3,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pxUpdateOpName: 'Anna Szarawara',
                          Typ: 'Online',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T07:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        Subject: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'e699c57d-9e1d-4b60-85ae-0d26a39fc291',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 2,
                          pxSaveDateTime: null,
                          Webexlink: null,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Telefon',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pxCommitDateTime: null,
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T07:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        Subject: null,
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: '4cc5c2d9-6a5e-441e-b437-12f0a5ca1b54',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T07:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'f0f5b9f7-54da-4a07-9eeb-ef72893f6a0d',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144631551140pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T07:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'bc4e5649-ccc3-4754-9438-d0f97fd8e607',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Webexlink: null,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 999,
                          Beschreibung: 'Außenstelle BMVG',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T07:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'e1ac674a-413b-485a-8506-2823f139574b',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144640117495pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T00:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        Subject: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'f538651f-3b90-43c3-ae0f-b58ab8a9b366',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Webexlink: null,
                          DisplayOrder: 999,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          Beschreibung: 'Außenstelle BMVG',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T00:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        Subject: null,
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: '1ab7cf64-d182-40ac-955d-2b528eab846f',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          Webexlink: null,
                          DisplayOrder: 3,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          Typ: 'Online',
                          pxUpdateOpName: 'Anna Szarawara',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T00:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: '77195216-8954-46a6-b695-42db48514e5d',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Webexlink: null,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 2,
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          Typ: 'Telefon',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pxCommitDateTime: null,
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T00:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        Subject: null,
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'b4af86a0-186c-4363-b7de-d04596b36648',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T00:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: '40a0b895-cac7-40f9-9f96-80047bc5bac7',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 999,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          Beschreibung: 'Außenstelle BMVG',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: '18397c87-f024-40a9-b54e-0a1666abe587',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxSaveDateTime: null,
                          Webexlink: null,
                          DisplayOrder: 3,
                          pxUpdateSystemID: 'pega-tc',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pxUpdateOpName: 'Anna Szarawara',
                          Typ: 'Online',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: '78305f94-7a56-4a3b-8495-b086575ff975',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxSaveDateTime: null,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 2,
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          Typ: 'Telefon',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'a52f9b59-3bfe-4565-9391-f376801df6fa',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: '81f04d86-fbb5-478f-aee4-17e3a94dc01f',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144676280283pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T16:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T08:00:00.000Z',
                        Termin: null,
                        SerieRepeat: 'Wöchentlich',
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: true,
                        SerieEndDate: null,
                        pyGUID: 'a489e77a-5d1d-4141-9d9e-2c30b7a8d73f',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T12:45:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T12:15:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              pxUpdateOpName: 'Andrzej Fudala',
                              Typ: 'Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceClass: 'BW-KommC-Data-TerminTyp',
                                pySourceType: 'Lookup'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'd12f029e-afdd-4644-b30b-89dc412f087c',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-6049',
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          DisplayOrder: 3,
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          Webexlink: null,
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          Typ: 'Online',
                          pxUpdateOpName: 'Anna Szarawara',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-03T14:15:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T13:15:00.000Z',
                        Termin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Termin',
                          TerminTyp: [
                            {
                              Order: 1,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:52:53.687Z',
                              pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                              pzPageNameHash: '_pa11421815782998620pz',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Präsenzberatung',
                              Typ: 'Präsenzberatung',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:52:53.687Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Präsenzberatung'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            },
                            {
                              Order: 2,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:53:14.121Z',
                              pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                              pzPageNameHash: '_pa11426144696659813pz',
                              Typ: 'Telefon',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Telefon',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:53:14.121Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Telefon'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            },
                            {
                              Order: 3,
                              pxUpdateSystemID: 'pega-tc',
                              pxSaveDateTime: null,
                              pxUpdateDateTime: '2024-08-02T13:53:17.858Z',
                              pzLoadTime: 'September 30, 2024 at 2:03:03 PM GMT',
                              pzPageNameHash: '_pa11423827717186768pz',
                              Typ: 'Online',
                              pzInsKey: 'BW-KommC-Data-TerminTyp Online',
                              pxUpdateOpName: 'Andrzej Fudala',
                              pxUpdateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pzPageNameBase: 'D_TerminTyp',
                              pxObjClass: 'BW-KommC-Data-TerminTyp',
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              pySourcePage: {
                                pxObjClass: 'Embed-DataSource',
                                pySourceIdentifier: 'Termin-Typ',
                                pySourceNumber: '1',
                                pySourceType: 'Lookup',
                                pySourceClass: 'BW-KommC-Data-TerminTyp'
                              },
                              pxCreateDateTime: '2024-08-02T13:53:17.858Z',
                              pxCreateSystemID: 'pega-tc',
                              pxDPParameters: {
                                Typ: 'Online'
                              },
                              pxCommitDateTime: null,
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Beratungsart: 'Erstberatung',
                          Contact: {
                            pxObjClass: 'Common-LDM-Entity-Contact',
                            FirstName: 'Max',
                            FullName: 'Max Mustermann',
                            LastName: 'Mustermann',
                            Salutation: 'Herr'
                          }
                        },
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Termin',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'fa874bfe-0464-4972-abfa-84b0234e5b80',
                        TerminID: 'BW-KOMMC-WORK-GRP1 TER-7015',
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          Webexlink: null,
                          DisplayOrder: 3,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          Typ: 'Online',
                          pxUpdateOpName: 'Anna Szarawara',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '626af7c9-bbf1-48ad-a373-2472134da842',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '0d875fff-dc68-4208-b2ed-4fdd72bb7251',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144716665760pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'e6a13914-0560-4d2f-815d-6563fd60b5d1',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Webexlink: null,
                          DisplayOrder: 999,
                          pxSaveDateTime: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          Beschreibung: 'Außenstelle BMVG',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          Typ: 'Außenstelle',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        Subject: null,
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '82dfc7c5-59d3-4f82-8632-a8e1063d0a3a',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          DisplayOrder: 2,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pxUpdateDateTime: '2024-08-07T11:07:40.503Z',
                          pzLoadTime: 'September 30, 2024 at 1:58:21 PM GMT',
                          pzPageNameHash: '_pa11423545806265439pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Telefon',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9'
                          },
                          pxCommitDateTime: null,
                          pyGUID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-01T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-03T22:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: null,
                        BeratungsstelleID: 'ce75fb8a-e293-45fe-b88f-9fcd2886dde9',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '5',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '2b9f8a4b-b6c9-4ec1-8697-f9d9b5db9205',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxSaveDateTime: null,
                          DisplayOrder: 3,
                          pxUpdateDateTime: '2024-09-30T13:17:32.848Z',
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 2:00:14 PM GMT',
                          pzPageNameHash: '_pa11423658415194432pz',
                          Typ: 'Online',
                          pxUpdateOpName: 'Anna Szarawara',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxUpdateOperator: 'Anna.Szarawara.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54'
                          },
                          pxCommitDateTime: null,
                          pyGUID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-04T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-04T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '19ae56ee-fa10-4dcc-a296-b8e872417e54',
                        Subject: 'Vertretung XXX',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '758f67c9-fc24-4fe6-96a8-3f38fd4f3492',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxSaveDateTime: null,
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          DisplayOrder: 999,
                          Beschreibung: 'Außenstelle BMVG',
                          pxUpdateDateTime: '2024-09-04T23:28:49.945Z',
                          pzLoadTime: 'September 30, 2024 at 1:56:52 PM GMT',
                          pzPageNameHash: '_pa11423456417538951pz',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T10:51:12.077Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712'
                          },
                          pyGUID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'cbc4c124-2f9a-4ab2-9ff2-92839d1f9392'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-04T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-04T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: 'Vertretung XXX',
                        BeratungsstelleID: '04d0cb3b-dc6e-4705-9187-c561772c0712',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '1f01b8de-af46-48bf-a470-e84a4957fa59',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          pxUpdateSystemID: 'pega-tc',
                          Webexlink: null,
                          pxSaveDateTime: null,
                          DisplayOrder: null,
                          pxUpdateDateTime: '2024-08-07T10:54:56.824Z',
                          Beschreibung: 'Außenstelle Müggelsee',
                          pzLoadTime: 'September 30, 2024 at 2:41:40 PM GMT',
                          pzPageNameHash: '_pa11426144733835292pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                          Typ: 'Außenstelle',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceType: 'Lookup',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle'
                          },
                          pxCreateDateTime: '2024-08-07T10:52:51.466Z',
                          pxCreateSystemID: 'pega-tc',
                          pxDPParameters: {
                            pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09'
                          },
                          pyGUID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                          pxCommitDateTime: null,
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: 'f8dea1af-4f39-49f4-be7c-73860f66b4f6'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-04T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-04T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        Subject: 'Vertretung XXX',
                        BeratungsstelleID: '9f1e996b-42e1-4420-b5c6-d9beda313e09',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: '0a381fe1-b9db-485f-baa5-cae6fed3868c',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: {
                          Adresse: {
                            Raum: null,
                            pxUpdateSystemID: 'pega-tc',
                            pxUpdateDateTime: '2024-08-06T18:43:29.594Z',
                            pxUpdateOpName: 'Christopher.Rohde.ext@bwi.de',
                            pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            pySourcePage: {
                              pxObjClass: 'Embed-DataSource',
                              pySourceIdentifier: 'Beratungsadresse',
                              pySourceNumber: '1',
                              pySourceClass: 'BW-BWEnt-Data-Beratungsadresse',
                              pySourceType: 'Lookup'
                            },
                            pxCreateDateTime: '2024-08-06T18:43:29.594Z',
                            pxDPParameters: {
                              pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                            },
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117',
                            Gebaudeteil: null,
                            pxSaveDateTime: null,
                            pzLoadTime: 'September 30, 2024 at 1:29:31 PM GMT',
                            pzPageNameHash: '_pa11421815770213303pz',
                            pzInsKey:
                              'BW-BWEnt-Data-Beratungsadresse 90762f27-74c3-4586-8a50-0c6f08109c57',
                            pzPageNameBase: 'D_Beratungsadresse',
                            Bezeichnung: null,
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                            pxCreateSystemID: 'pega-tc',
                            pxCommitDateTime: null,
                            pyGUID: '90762f27-74c3-4586-8a50-0c6f08109c57',
                            pxCreateOpName: 'Christopher.Rohde.ext@bwi.de'
                          },
                          Webexlink: null,
                          pxUpdateSystemID: 'pega-tc',
                          pxUpdateDateTime: '2024-09-27T09:40:38.676Z',
                          pxUpdateOpName: 'Christopher Rohde',
                          pxUpdateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pySourcePage: {
                            pxObjClass: 'Embed-DataSource',
                            pySourceIdentifier: 'Beratungsstelle',
                            pySourceNumber: '1',
                            pySourceClass: 'BW-BWEnt-Data-Beratungsstelle',
                            pySourceType: 'Lookup'
                          },
                          pxCreateDateTime: '2024-08-07T11:07:40.503Z',
                          pxDPParameters: {
                            pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7'
                          },
                          pxSaveDateTime: null,
                          DisplayOrder: 1,
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          pzLoadTime: 'September 30, 2024 at 1:30:09 PM GMT',
                          pzPageNameHash: '_pa11421853815110435pz',
                          pzInsKey:
                            'BW-BWEnt-Data-Beratungsstelle 03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          Typ: 'Präsenzberatung',
                          pzPageNameBase: 'D_Beratungsstelle',
                          OrganisationseinheitID: '58400796-bd4a-4215-97a4-18e59a521998',
                          pxObjClass: 'BW-BWEnt-Data-Beratungsstelle',
                          pxCreateOperator: 'Christopher.Rohde.ext@bwi.de',
                          pxCreateSystemID: 'pega-tc',
                          pxCommitDateTime: null,
                          pyGUID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                          pxCreateOpName: 'Christopher.Rohde.ext@bwi.de',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        },
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-04T14:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-04T05:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: '03ac1c7b-f87b-4310-85db-88cf7bf0cde7',
                        Subject: 'Vertretung XXX',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '6',
                        Type: 'Verfügbar',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: null,
                        SerieEndDate: null,
                        pyGUID: 'b9d98304-5bc4-470c-b604-bb13e03abd19',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        Beratungsstelle: null,
                        AuthorID: 'c7949ca1-0c50-47ee-af2f-1dcd2486b589',
                        EndTime: '2024-10-04T22:00:00.000Z',
                        CompleteDay: null,
                        StartTime: '2024-10-05T14:00:00.000Z',
                        Termin: null,
                        SerieRepeat: null,
                        BeratungsstelleID: null,
                        Subject: 'Arzttermin 2',
                        pxObjClass: 'BW-KommC-Data-TimeSlot',
                        Weekday: '7',
                        Type: 'Abwesend',
                        ParentSerieID: null,
                        Capacity: null,
                        IsSerie: false,
                        SerieEndDate: null,
                        pyGUID: '7b7b3bcd-7cd2-4336-9d9f-8f0f9b054fab',
                        TerminID: null,
                        MonthDisplayText: '2024_10'
                      },
                      {
                        pyGUID: 'A-1004',
                        Subject: 'Conference',
                        CompleteDay: true,
                        SerieRepeat: 'wöchentlich',
                        SerieEndDate: '2024-12-31',
                        EndTime: '2024-10-01T11:00:00.000Z',
                        StartTime: '2024-10-01T10:00:00.000Z',
                        Type: 'Sammel',
                        Sammeltermin: {
                          pzInsKey: 'Sammeltermin A-1004',
                          Address: {
                            Strasse: 'Max-Joseph-Platz',
                            Hausnummer: '2',
                            PLZ: 80539,
                            Ort: 'München'
                          },
                          Kapazitaet: 100,
                          GenutzteKapazitat: 68
                        },
                        Beratungsstelle: {
                          Typ: 'Präsenzberatung'
                        }
                      },
                      {
                        pyGUID: 'A-1005',
                        Subject: 'Town hall',
                        pxCreateOpName: 'Marc Doe',
                        EndTime: '2024-10-01T18:00:00.000Z',
                        StartTime: '2024-10-01T17:00:00.000Z',
                        Type: 'Sammel',
                        Sammeltermin: {
                          pzInsKey: 'Sammeltermin A-1005',
                          Address: {
                            Strasse: 'Max-Joseph-Platz',
                            Hausnummer: '2',
                            PLZ: 80539,
                            Ort: 'München'
                          },
                          Kapazitaet: 500,
                          GenutzteKapazitat: 412
                        },
                        Beratungsstelle: {
                          Typ: 'Online'
                        }
                      },
                      {
                        EndTime: '2024-10-04T11:00:00.000Z',
                        StartTime: '2024-10-04T10:00:00.000Z',
                        TerminID: 'A-999',
                        pyLabel: 'James Smith',
                        Type: 'Termin',
                        Termin: {
                          pzInsKey: 'Termin A-999',
                          pxObjClass: 'Termin-Obj-Class',
                          Beratungsart: 'Folgeberatung',
                          Contact: {
                            FirstName: 'James',
                            LastName: 'Smith',
                            FullName: 'James Smith',
                            Salutation: 'Herr'
                          }
                        },
                        Beratungsstelle: {
                          Typ: 'Telefon'
                        }
                      },
                      {
                        StartTime: '2024-10-08T09:00:00.000Z',
                        EndTime: '2024-10-08T10:00:00.000Z',
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
                        },
                        TerminID: 'A-1003',
                        Beratungsstelle: {
                          Typ: 'Außendienststelle'
                        }
                      },
                      {
                        EndTime: '2024-10-09T11:00:00.000Z',
                        StartTime: '2024-10-09T10:00:00.000Z',
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
                        },
                        TerminID: 'A-1002'
                      },
                      {
                        EndTime: '2024-10-10T15:00:00.000Z',
                        StartTime: '2024-10-10T14:00:00.000Z0',
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
                        },
                        TerminID: 'A-1001'
                      },
                      {
                        EndTime: '2024-10-03T15:30:00.000Z',
                        StartTime: '2024-10-03T14:30:00.000Z',
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
                        },
                        TerminID: 'A-1000'
                      },
                      {
                        StartTime: '2024-10-15T11:00:00.000Z',
                        EndTime: '2024-10-15T12:00:00.000Z',
                        Type: 'Verfügbar',
                        CompleteDay: true,
                        pyGUID: 'A-1010'
                      },
                      {
                        StartTime: '2024-10-16T08:30:00.000Z',
                        EndTime: '2024-10-16T09:30:00.000Z',
                        Type: 'Verfügbar',
                        pyGUID: 'A-1006'
                      },
                      {
                        StartTime: '2024-10-10T13:00:00.000Z',
                        EndTime: '2024-10-10T18:00:00.000Z',
                        Type: 'Verfügbar',
                        pyGUID: 'A-1007'
                      },
                      {
                        StartTime: '2024-10-10T08:00:00.000Z',
                        EndTime: '2024-10-10T10:30:00.000Z',
                        Subject: 'Training',
                        Type: 'Abwesend',
                        pyGUID: 'A-1008'
                      },
                      {
                        StartTime: '2024-10-17T13:00:00.000Z',
                        EndTime: '2024-10-17T18:00:00.000Z',
                        pxCreateOpName: 'Marc Doe',
                        Subject: 'Training',
                        Type: 'Abwesend',
                        pyGUID: 'A-1009'
                      },
                      {
                        StartTime: '2024-10-18T15:00:00.000Z',
                        EndTime: '2024-10-T18:00:00.000Z',
                        pxCreateOpName: 'Marc Doe',
                        Type: 'Verfügbar',
                        CompleteDay: true,
                        pyGUID: 'A-1010'
                      }
                    ]
                  }
                }),
              3000
            )
          );
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
