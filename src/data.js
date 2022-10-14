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
]

export const theme = {
    primaryColor: "#2079a9"
}

export const registerQuestions = 
    [
        {
            sessionTitle: "Details of Organization", 
            questions:[
                {
                    title: "Nature of Organization",
                    type:"checkbox",
                    description:[
                        "Incumbent Legislative Council (LegCo) Member/ District Council (DC) Member",
                        "Charitable institution or trust of a public character which is exempt from tax under section 88 of the Inland Revenue Ordinance (Cap. 112) or society registered under Societies Ordinance (Cap. 151)",
                        "Government department or statutory organisation",
                        "Other legally registered body"
                    ]               
                },
                {
                    title: "Name of Organization/ Name of LegCo/ DC Member",
                    instruction: "Please provide registered organization name. Identical name required.",
                    type: "input"
                },
                {
                    title: "Name of Sub-Organization",
                    instructions: "Please provide registered sub-organization name. Identical name required.",
                    type: "input"
                },
                {
                    title: "Registration Number (Optional)",
                    type: "input"
                },
                {
                        title: "validity Period (Optional)",
                        type: "date"
                }
    
            ],
        },
        {
            sessionTitle: "Contact Information",
            questions:[
                {
                    title:"Name of Contact Person",
                    type:"input"
                },
                {
                    title:"Position in the Application Organization",
                    type:"select"
                },
                {
                    title:"Corresponence Address",
                    type:"input"
                },
                {
                    title:"E-mail",
                    type:"input"
                },
                {
                    title:"Tel. No.",
                    type:"input"
                },
                {
                    title:"Emergency Tel/ No/ (Optional)",
                    type:"input"
                },
                {
                    title:"Fax No. (Optional)",
                    type:"input"
                }
            ]
        },
        {
            sessionTitle: "Supporting Documents",
            questions:[
                {
                    description:[
                        "I/We attach the following documents in support attach the following documents in support",
                        "documents evidence in support attach the following documents in support documents evidence in support attach the following documents in support documents evidence in support attach the following documents in support",
                        "documents evidence in support attach the following documents in support documents evidence ",
                        "documents evidence in support attach the following documents in support documents evidence ",
                    ],
                    type:"input"
                },
                {
                    label:"Upload New Documents",
                    type:"file",
                    description:[
                        "I/We attach the following documents in support attach the following documents in support, documents evidence in support attach the following documents in support documents evidence in support attach the following documents in support documents evidence in support attach the following documents in support",
                        "NOTE:",
                        "(1) documents evidence in support attach the following documents in support documents evidence ",
                    ],
                },
                {
                    title:"What district will you make application most likely?",
                    type:"select"
                },
                {
                    title:"Agreement for privacy policy",
                    description:["I understand and agree to the User Agreement Privacy Policy"],
                    type:"checkbox"
                },
            ]
        }
    ]  