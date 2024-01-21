
const CourierClient = require("@trycourier/courier");
const courier = CourierClient(
    { authorizationToken: "pk_prod_XG8EV91E4BMSWSKPYPXVNXC6E224"});
  

    function submitForm() {
        // Capture form data
        var formData = {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          message: document.getElementById('message').value
        };
  
        // You can now use the 'formData' object to perform actions such as sending data to a server or processing it further.
        console.log(formData);

        async function msg(){
            const { requestId } = await courier.send({
            message: {
              content: {
                title: "Prakasa - New Enquiry",
                body: "New"
              },
              data: {
                formData
              },
              to: {
                email: "iamaditya121001@gmail.com"
              }
            }
           });
        }
        
        msg();
      }



// async function msg(){
//     const { requestId } = await courier.send({
//         message: {
//           content: {
//             title: "Prakasa - New Enquiry",
//             body: "New"
//           },
//           data: {
//             formData
//           },
//           to: {
//             email: "iamaditya121001@gmail.com"
//           }
//         }
//        });
// }


