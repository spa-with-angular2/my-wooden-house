export interface NavTexts {
        NewHome:  {
            Value: string,
            FourStepsToNewHome: string,
            WhyChooseUs: string,
            PriceList: string
        },
        About: {
            Value: string,
            AboutTheCompany: string,
            Services: string,
            Financing: string,
            OurPartners: string
        },
        Products: {
            Value: string,
            SeeAll: string,
            Bungalows: string,
            Houses: string,
            GardenCabins: string,
            Garages: string
        },
        Gallery: {
            Value: string,
            SeeAll: string,
            Bungalows: string,
            Houses: string,
            GardenCabins: string,
            Garages: string
        },
        EnergyEfficiency: {
            Value: string,
            SaveOnBills: string,
            Insulation: string,
            Ventilation: string
        },
        Technology: {
            Value: string,
            WhatIsModularTechnology: string,
            MaterialsUsed: string,
            TheAdvantages: string,
            TheBuildingProcess: string
        },
        Contacts: {
            Value: Contacts
        }
}

export interface TranslationInterface {
    changeLang(lang: string): void;

    getObjectForTranslation(objectName: string): any;
}

export interface AuthenticationInterface {
    isLoggedIn: boolean;
}
