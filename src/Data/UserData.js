import { Divorce, Criminal, Property } from "./Constant"
export const user = [
    {
        user: "Akansha",
        password: "ab.cd@01",
        type: user
    },
    {
        user: "lawyer1",
        password: "ab.cd@01",
        type: lawyer
    },
]

// export const Type = {
//     Divorce: "divorce",
//     Criminal: "criminal",
//     Property: "property"
// }

const lawyer = [
    {
        user: "lawyer1",
        speciality=[{ Divorce: 500 }, { Criminal: 400 }],
        Availability=[],
    },
    {
        user: "lawyer2",
        speciality=[],
        Availability=[],
    },
    {
        user: "lawyer3",
        speciality=[],
        Availability=[],
    },
    {
        user: "lawyer4",
        speciality=[],
        Availability=[],
    },
]
