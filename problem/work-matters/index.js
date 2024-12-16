let t = [
  {
    id: 7,
    id_instansi: 101,
    name: "Pemerintah Kabupaten Aceh Barat",
    id_template: 4,
    year: 2021,
    score: 5,
    description:
      "syear $penaltyScoreData = KorsupgahMcpPenaltyScore::findFirst([\n 'conditions' => 'id = :id: and deleted_at is null',\n 'bind' =>[\n 'id' => $id\n ]\n ]);\n",
    created_by: 87,
    created_at: "2024-12-10 08:09:22.260886",
    updated_by: null,
    updated_at: null,
    deleted_by: null,
    deleted_at: null,
  },
  {
    id: 11,
    id_instansi: 222,
    name: "Pemerintah Kabupaten Indragiri Hilir",
    id_template: 9,
    year: 2023,
    score: 2,
    description:
      "The demon shall be perished! long live NSDAP!Vue DevTools v7 detected in your Vue2 project. v7 only supports Vue3 and will not work. Vue DevTools v7 detected in your Vue2 project. v7 only supports Vue3 and will not work. ",
    created_by: 3,
    created_at: "2024-12-10 08:17:40.071156",
    updated_by: null,
    updated_at: null,
    deleted_by: null,
    deleted_at: null,
  },
  {
    id: 15,
    id_instansi: 242,
    name: "Pemerintah Kabupaten Katingan",
    id_template: 9,
    year: 2023,
    score: 2,
    description:
      "The demon shall be perished! long live NSDAP!Vue DevTools v7 detected in your Vue2 project. v7 only supports Vue3 and will not work. Vue DevTools v7 detected in your Vue2 project. v7 only supports Vue3 and will not work. ",
    created_by: 3,
    created_at: "",
    updated_by: null,
    updated_at: null,
    deleted_by: null,
    deleted_at: null,
  },
  {
    id: 18,
    id_instansi: 102,
    name: "Pemerintah Kabupaten Aceh Barat Daya",
    id_template: 11,
    year: 2024,
    score: 15,
    description: "isDeleteSuccesisDeleteSuccesisDeleteSucces",
    created_by: 87,
    created_at: "2024-12-11 03:41:38.489457",
    updated_by: null,
    updated_at: null,
    deleted_by: null,
    deleted_at: null,
  },
];

const deletedId = 7;
t = t.filter((x) => {
  x.id !== deletedId;
}); // will return []

t = t.filter((x) => x.id !== deletedId);

// console.log(t);

const x = [
  {
    id: 15,
    id_instansi: 242,
    name: "Pemerintah Kabupaten Katingan",
    id_template: 9,
    year: 2023,
    score: 2,
    description:
      "The demon shall be perished! long live NSDAP!Vue DevTools v7 detected in your Vue2 project. v7 only supports Vue3 and will not work. Vue DevTools v7 detected in your Vue2 project. v7 only supports Vue3 and will not work. ",
    created_by: 3,
    created_at: "",
    updated_by: null,
    updated_at: null,
    deleted_by: null,
    deleted_at: null,
  },
];

const date = new Date().toJSON().slice(0, 10);

const x1 = x.map((y) => (date ? { ...y, created_at: date } : 0));

console.log(x1);
