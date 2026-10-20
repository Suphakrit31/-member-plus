const express = require("express");

const app = express();
const port = 3000;

const project = {
  teamName: "Member Plus",
  projectName: "Member Plus",
  problem:
    "แก้ปัญหาการจัดการข้อมูลสมาชิก แพ็กเกจ ระยะเวลาการใช้งาน และรอบบิลที่กระจัดกระจายหรือใช้การบันทึกด้วยมือ ซึ่งอาจทำให้ข้อมูลผิดพลาด ติดตามวันหมดอายุได้ยาก และตรวจสอบประวัติย้อนหลังไม่สะดวก โดยพัฒนาระบบส่วนกลางที่ช่วยให้ผู้ดูแลจัดการข้อมูลได้อย่างเป็นระบบ",
  users: ["ผู้ดูแลระบบ", "เจ้าหน้าที่ที่ดูแลข้อมูลสมาชิกและแพ็กเกจ"],
  members: [
    {
      name: "Suphakrit Kongthitidech 031",
      role: "ฝ่ายพัฒนา (Developer)",
    },
    {
      name: "aithipun junpa 038",
      role: "ฝ่าย Requirement และตรวจสอบ (Requirement & QA)",
    },
  ],
};

app.get("/hello", (req, res) => {
  res.send("Hello from Member Plus API!");
});

app.get("/project", (req, res) => {
  res.json(project);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
