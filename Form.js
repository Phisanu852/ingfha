      //-const scriptURL = 'https://script.google.com/macros/s/AKfycbxBx8J7PfSImo50bYvCEkEu6PEX5aZs4SctXlAfFYPlOe66QbXQT3u7HA3_ZZZBlz4yRA/exec'
            //const form = document.forms['hello-sheet']
          
           // form.addEventListener('submit', e => {
           //   e.preventDefault()
           //   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
           //     .then(response => alert("Thank you for your interest in our diving tours."))
            //    .catch(error => console.error('Error!', error.message))
          //  })


// ตรวจสอบไฟล์ Form.js
// จากการดูในโค้ด HTML ของคุณ มีการอ้างอิงไฟล์ "Form.js" ซึ่งน่าจะเป็นไฟล์ที่ใช้ในการส่งข้อมูลไปยัง Google Sheet
// ถ้าคุณสามารถแก้ไขไฟล์นี้ได้ คุณควรปรับปรุงโค้ดดังต่อไปนี้

// สมมติว่านี่คือเนื้อหาของไฟล์ Form.js (ที่อาจจะใช้อยู่เดิม)
document.addEventListener('DOMContentLoaded', function() {
  // รับฟอร์มโดยชื่อ
  const form = document.forms['hello-sheet'];
  
  // ตรวจสอบว่ามีฟอร์มนี้อยู่หรือไม่
  if (form) {
    // เมื่อมีการส่งฟอร์ม
    form.addEventListener('submit', function(e) {
      // สิ่งสำคัญคือต้องป้องกันการส่งฟอร์มโดยตรง
      e.preventDefault();
      
      // ตรวจสอบ reCAPTCHA
      const recaptchaResponse = grecaptcha.getResponse();
      
      // ถ้าไม่ผ่านการตรวจสอบ reCAPTCHA
      if (recaptchaResponse.length === 0) {
        alert("กรุณายืนยันว่าคุณไม่ใช่บอทโดยการทำ reCAPTCHA");
        return false;
      }
      
      // ถ้าผ่านการตรวจสอบ reCAPTCHA แล้ว ให้ดำเนินการส่งข้อมูลต่อ
      
      // ตรงนี้คือโค้ดที่ส่งข้อมูลไปยัง Google Sheet (อาจแตกต่างตามที่คุณใช้อยู่)
      // สมมติว่าใช้ fetch API หรือ XMLHttpRequest
      // (คุณควรปรับให้ตรงกับวิธีที่คุณใช้อยู่จริง)
      
      // เก็บข้อมูลจากฟอร์ม
      const formData = new FormData(form);
      
      // ส่งไปยัง script URL ที่เชื่อมต่อกับ Google Sheet ของคุณ
      // (แทนที่ด้วย URL จริงของคุณ)
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxBx8J7PfSImo50bYvCEkEu6PEX5aZs4SctXlAfFYPlOe66QbXQT3u7HA3_ZZZBlz4yRA/exec';
      
      // ส่งข้อมูลโดยใช้ fetch
      fetch(scriptURL, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          // เมื่อส่งสำเร็จ
          alert("ส่งข้อมูลเรียบร้อยแล้ว ขอบคุณสำหรับการติดต่อ!");
          form.reset();
          grecaptcha.reset(); // รีเซ็ต reCAPTCHA
        } else {
          alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง");
      });
    });
  }
});
            




