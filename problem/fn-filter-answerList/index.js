const t1 = {
  success: true,
  data: {
    answerList: [
      {
        id: 404140,
        id_survey: 5993,
        status: 0,
        nilai: 71,
        nilai_verifikasi: 100,
        nilai_verifikasi_qa: null,
        nilai_verifikasi_pic: null,
        created_at: "2024-11-15 08:57:15",
        verified_at: "2024-11-18 06:47:20",
        qa_verified_at: null,
        pic_verified_at: null,
        keterangan: "pai lop maya",
        keterangan_verifikasi:
          "Soon will be flagged, hitler's flag on every street!",
        keterangan_verifikasi_qa: null,
        created_by: "Test Korwil KLOP",
        verified_by: "Test Korwil Verif",
        qa_verified_by: null,
        pic_verified_by: null,
      },
      {
        id: 368552,
        id_survey: 5993,
        status: 1,
        nilai: 50,
        nilai_verifikasi: 50,
        nilai_verifikasi_qa: null,
        nilai_verifikasi_pic: null,
        created_at: "2024-09-03 00:33:20",
        verified_at: "2024-09-04 08:51:08",
        qa_verified_at: null,
        pic_verified_at: null,
        keterangan:
          "Kami tambahkan surat Kepala Bappeda tentang daftar Pokir 2024.&nbsp;",
        keterangan_verifikasi:
          "Mohon lengkapi dengan\r<div>\r</div><div>- Dokumen hasil Input Pokok Pikiran (Pokir) dalam SIPD\r</div><div>- Hasil validasi/ status Pokir di dalam SIPD\r</div><div>- Dokumen pokir yang disampaikan dari Banggar DPRD kepada Kepala Daerah melalui TAPD</div>",
        keterangan_verifikasi_qa: null,
        created_by: "Saverinus Afrino",
        verified_by: null,
        qa_verified_by: null,
        pic_verified_by: null,
      },
      {
        id: 361929,
        id_survey: 5993,
        status: 1,
        nilai: 30,
        nilai_verifikasi: 50,
        nilai_verifikasi_qa: null,
        nilai_verifikasi_pic: null,
        created_at: "2024-08-12 03:19:40",
        verified_at: "2024-09-02 07:15:38",
        qa_verified_at: null,
        pic_verified_at: null,
        keterangan:
          "Pengawasan Pelaksanaan Pokir oleh OPD Teknis:<div>- Laporan Pokir Semester I 2024_PUSDATARU<div>- Laporan Pokir Semester I 2024_DISPORAPAR<br></div><div>- Laporan Pokir Semester I 2024_DISPERINDAG<br></div></div><div>- Laporan Pokir Semester I 2024_KESBANGPOL</div><div><br></div><div>Kami tambhakan Pakta Integritas Pelaksanan Pokir, Hibah dan/atau Bansos tahun 2024 oleh Pj. Gubernur dan Pimpinan DPRD.</div>",
        keterangan_verifikasi:
          "Mohon lengkapi dengan<div>- Dokumen hasil Input Pokok Pikiran (Pokir) dalam SIPD</div><div>- Hasil validasi/ status Pokir di dalam SIPD</div><div>- Dokumen pokir yang disampaikan dari Banggar DPRD kepada Kepala Daerah melalui TAPD</div>",
        keterangan_verifikasi_qa: null,
        created_by: "Saverinus Afrino",
        verified_by: null,
        qa_verified_by: null,
        pic_verified_by: null,
      },
    ],
    attachmentList: [
      {
        id_answer: 404140,
        uuid: "1cc90364-ccee-4f27-88e1-f8cf08cddec5",
        filename: "Untitled (copy).jpg",
      },
    ],
  },
};

const answerListData = t1.data.answerList;

const t2 = {
  id: 404140,
  id_survey: 5993,
  id_question: 514,
  nilai: 71,
  keterangan: "pai lop maya",
  nilai_verifikasi: 100,
  keterangan_verifikasi: "Soon will be flagged, hitler's flag on every street!",
  status: 1,
  created_at: "2024-11-15 08:57:15",
  updated_at: "2024-11-15 15:57:15.024884",
  deleted_at: null,
  created_by: 4942,
  updated_by: null,
  verified_by: 4944,
  verified_at: "2024-11-18 06:47:20",
  qa_verified_by: null,
  qa_verified_at: null,
  pic_verified_by: null,
  pic_verified_at: null,
  nilai_verifikasi_qa: null,
  nilai_verifikasi_pic: null,
  keterangan_verifikasi_qa: null,
  keterangan_verifikasi_pic: null,
  attachments: [
    {
      tipe: 1,
      uuid: "1cc90364-ccee-4f27-88e1-f8cf08cddec5",
      filename: "Untitled (copy).jpg",
      keterangan: "",
      created_at: "2024-11-15 15:57:14.316161",
      deleted_at: null,
    },
  ],
  attachments_verification: [],
  attachments_verification_qa: [],
  attachments_verification_pic: [],
  verificator: {
    um_id: 4944,
    um_user_name: "test.korwil.verif",
    nama: "Test Korwil Verif",
    foto: "",
    uuid_user: "5670e7e9-2919-4cb1-82ce-a921da829a59",
    is_banned: false,
    jenis_kelamin: null,
    checkmark_verified: 0,
  },
  qa_verificator: null,
  pic_verificator: null,
  creator: {
    um_id: 4942,
    um_user_name: "test.korwil.klop",
    nama: "Test Korwil KLOP",
    foto: "",
    uuid_user: "f35468d3-4629-4c8e-8af1-9a6a15658b39",
    is_banned: false,
    jenis_kelamin: null,
    checkmark_verified: 1,
  },
  updater: null,
};
answerListData.map((x, i) => {
  if (x.id === t2.id) {
    console.log("motherfucker has come", x.id);
    x.status = 1;
  }
});

console.log("update answerListData", answerListData[0]);
