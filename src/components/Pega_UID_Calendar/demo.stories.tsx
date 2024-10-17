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
                        CompleteDay: true,
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
                          Ortsadresse: 'Max-Joseph-Platz 2, 80539 München',
                          Kapazitaet: 100,
                          GenutzteKapazitat: 68,
                          Ort: 'München'
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
                          Ort: 'München',
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
                        StartTime: '2024-10-15T08:00:00.000Z',
                        EndTime: '2024-10-15T12:00:00.000Z',
                        Type: 'Verfügbar',
                        pyGUID: 'A-1010',
                        Beratungsstelle: {
                          Adresse: {
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117'
                          },
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          Typ: 'Präsenzberatung',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        }
                      },
                      {
                        StartTime: '2024-10-15T08:30:00.000Z',
                        EndTime: '2024-10-15T12:00:00.000Z',
                        Type: 'Verfügbar',
                        pyGUID: 'A-1010',
                        Beratungsstelle: {
                          Adresse: {
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117'
                          },
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          Typ: 'Online',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        }
                      },
                      {
                        StartTime: '2024-10-15T07:00:00.000Z',
                        EndTime: '2024-10-15T14:00:00.000Z',
                        Type: 'Verfügbar',
                        pyGUID: 'A-1010',
                        Beratungsstelle: {
                          Adresse: {
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117'
                          },
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          Typ: 'Telefon',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        }
                      },
                      {
                        StartTime: '2024-10-15T05:00:00.000Z',
                        EndTime: '2024-10-15T14:30:00.000Z',
                        Type: 'Verfügbar',
                        pyGUID: 'A-1010',
                        Beratungsstelle: {
                          Adresse: {
                            Hausnummer: '147',
                            Ort: 'Berlin',
                            Strasse: 'Friedrichstr.',
                            PLZ: '10117'
                          },
                          Beschreibung: 'Beratungsstelle Berlin-Mitte',
                          Typ: 'Außendienststelle',
                          AddressID: '90762f27-74c3-4586-8a50-0c6f08109c57'
                        }
                      },
                      {
                        StartTime: '2024-10-11T09:00:00.000Z',
                        EndTime: '2024-10-11T10:30:00.000Z',
                        Subject: 'Training',
                        Type: 'Abwesend',
                        pyGUID: 'A-1008'
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
                        Sammeltermin: {
                          pxObjClass: 'BW-KommC-Work-Grp1-Sammeltermin',
                          Ort: 'Außenstelle Spandau',
                          GenutzteKapazitat: 0,
                          Ortstyp: 'Karriereberatungsbüro',
                          AngemeldeteInteressenten: null,
                          AndererOrt: null,
                          Ortsadresse: 'Seegefelder Str. 14-16, 13597 Berlin',
                          VerfugbareKapazitat: 8,
                          Beratungsort: {
                            Adresse: 'Seegefelder Str. 14-16, 13597 Berlin',
                            pxObjClass: 'BW-KommC-Data-Beratungsort',
                            pyGUID: '6707a733-831c-4410-a95a-84c3d20539bf',
                            Beratungsort: 'Außenstelle Spandau'
                          },
                          Kapazitaet: 8
                        }
                      },
                      {
                        Sammeltermin: {
                          Ort: 'Schule XYZ',
                          pxObjClass: 'BW-KommC-Work-Grp1-Sammeltermin',
                          GenutzteKapazitat: 5,
                          Ortstyp: 'Anderer Ort',
                          AndererOrt: {
                            Ort: 'Musterhausen',
                            pxObjClass: 'BW-BWEnt-Data-Beratungsadresse',
                            Raum: '102',
                            Gebaudeteil: '2',
                            Strasse: 'Musterweg',
                            Bezeichnung: 'Schule XYZ',
                            Hausnummer: '1',
                            PLZ: '12345'
                          },
                          AngemeldeteInteressenten: [
                            {
                              pxObjClass: 'BW-KommC-Data-SammelterminInteressent',
                              Gesamtanzahl: 2,
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              InteressentID: 'Int-0000212',
                              pxCreateDateTime: '2024-10-02T10:36:52.082Z',
                              pzIndexOwnerKey: 'BW-KOMMC-WORK-GRP1 SAM-2019',
                              AnzahlBegleitpersonen: 1,
                              pxCreateSystemID: 'pega-tc',
                              Interessent: {
                                pxObjClass: 'Common-LDM-Entity-Contact',
                                pyID: 'Int-0000212',
                                FullName: 'Teresa Unerreichbar',
                                pzInsKey: 'COMMON-LDM-ENTITY-CONTACT INT-0000212',
                                ContactID: 'Int-0000212'
                              },
                              pxCreateOpName: 'Andrzej Fudala'
                            },
                            {
                              pxObjClass: 'BW-KommC-Data-SammelterminInteressent',
                              Gesamtanzahl: 2,
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              InteressentID: 'Int-0000152',
                              pxCreateDateTime: '2024-10-02T11:19:51.177Z',
                              pzIndexOwnerKey: 'BW-KOMMC-WORK-GRP1 SAM-2019',
                              pxCreateSystemID: 'pega-tc',
                              AnzahlBegleitpersonen: 1,
                              Interessent: {
                                pyID: 'Int-0000152',
                                pxObjClass: 'Common-LDM-Entity-Contact',
                                FullName: 'Max Mustermann',
                                pzInsKey: 'COMMON-LDM-ENTITY-CONTACT INT-0000152',
                                ContactID: 'Int-0000152'
                              },
                              pxCreateOpName: 'Andrzej Fudala'
                            },
                            {
                              pxObjClass: 'BW-KommC-Data-SammelterminInteressent',
                              Gesamtanzahl: 1,
                              pxCreateOperator: 'Andrzej.Fudala.ext@bwi.de',
                              InteressentID: 'Int-0000180',
                              pzIndexOwnerKey: 'BW-KOMMC-WORK-GRP1 SAM-2019',
                              pxCreateDateTime: '2024-10-02T13:52:15.874Z',
                              pxCreateSystemID: 'pega-tc',
                              AnzahlBegleitpersonen: 0,
                              Interessent: {
                                pyID: 'Int-0000180',
                                pxObjClass: 'Common-LDM-Entity-Contact',
                                FullName: 'Klara Fall',
                                pzInsKey: 'COMMON-LDM-ENTITY-CONTACT INT-0000180',
                                ContactID: 'Int-0000180'
                              },
                              pxCreateOpName: 'Andrzej Fudala'
                            }
                          ],
                          Ortsadresse: 'Musterweg 1, 12345 Musterhausen, Gebäudeteil: 2, Raum: 102',
                          VerfugbareKapazitat: 5,
                          Beratungsort: null,
                          Kapazitaet: 10
                        }
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
