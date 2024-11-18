const dataSet = [
  {
    empid: "SJ011MS",
    job: "Programmer",
    personal: {
      name: "Smith Jones",
      gender: "Male",
      age: 28,
      address: {
        streetaddress: "724th Street",
        city: "New York",
        state: "NY",
        postalcode: "10038",
      },
    },
    profile: {
      designation: "Deputy General",
      department: "Finance",
    },
  },
  {
    empid: "SJ011MS",
    job: "Programmer",
    personal: {
      name: "Hatsune Miku",
      gender: "Female",
      age: 28,
      address: {
        streetaddress: "724th Street",
        city: "New York",
        state: "NY",
        postalcode: "10038",
      },
    },
    profile: {
      designation: "Deputy General",
      department: "Finance",
    },
  },

  {
    empid: "SJ011MS",
    job: "Teacher",
    personal: {
      name: "Rin",
      gender: "Female",
      age: 28,
      address: {
        streetaddress: "724th Street",
        city: "New York",
        state: "NY",
        postalcode: "10038",
      },
    },
    profile: {
      designation: "Deputy General",
      department: "Finance",
    },
  },
];

// filtering the data based on the jobs
const jobs = dataSet.filter((dt) => dt.job === "Programmer");
// console.log('jobs:', jobs)

// filtering the data  of the propertiesand created a new data;
const jobsData = [];
dataSet.map((x) =>
  jobsData.push({ name: x.personal.name, job: x.profile.department })
);

const f1 = jobsData.filter((x) => x.name === "Rin");

console.log(f1)