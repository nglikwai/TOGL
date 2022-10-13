export const headerLinks = [
    {
        title: "FAQ",
        link: "/FAQ"
    },
    {
        title: "Contact",
        link: "/contact"
    },
    {
        title: "Site Map",
        link: "/sitemap"
    },
    {
        title: "Eng｜繁｜簡",
        link: "/language"
    },
    {
        title: "A A A",
        link: "/fontsize"
    },
]

export const theme = {
    primaryColor: "#2079a9"
}

export const registerQuestions = {
    sessionOne: {
        title: "Details of Organization",
        questionOne: {
            title: "Nature of Organization",
            choice: [
                {
                    title: "Incumbent Legislative Council (LegCo) Member/ District Council (DC) Member",
                    type: "checkbox"
                },
                {
                    title: "Charitable institution or trust of a public character which is exempt from tax under section 88 of the Inland Revenue Ordinance (Cap. 112) or society registered under Societies Ordinance (Cap. 151)",
                    type: "checkbox"
                },
                {
                    title: "Government department or statutory organisation",
                    type: "checkbox"
                },
                {
                    title: "Other legally registered body",
                    type: "checkbox"
                },
            ]
        },
        questionTwo: {
            title: "Name of Organization/ Name of LegCo/ DC Member",
            note: "Please provide registered organization name. Identical name required.",
            type: "input"
        },
        questionThree: {
            title: "Name of Sub-Organization",
            note: "Please provide registered sub-organization name. Identical name required.",
            type: "input"
        },
        questionFour: {
            title: "Registration Number (Optional)",
            type: "input"
        },
        questionFive: {
            title: "validity Period (Optional)",
            type: "date"
        },

    }

}