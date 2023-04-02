import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './submission.css'

function BasicExample() {
  return (
    <>
      <section>
        <div class="form-box1">
          <div class="form-value">
            <form action="">
              <h2>Submit</h2>
              <div class="inputbox w-90 ms-3">
                <ion-icon name="lock-mail-outline"></ion-icon>
                <input type="email" class='inputtextsub w-100 p-3' required />
                <label for="">Name</label>
              </div>
              <div class="inputbox w-90 ms-3">
                <ion-icon name="lock-mail-outline"></ion-icon>
                <input type="email" class='inputtextsub w-100 p-3' required/>
                <label for="">Description</label>
              </div>
              <div class="mb-3">
                <label for="formFile" class="form-label text-white ms-4 mymy">File</label>
                <input class="form-control mb-5" type="file" id="formFile" />
              </div>


              <button>Submit</button>

            </form>
          </div>
        </div>
      </section>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </>
  );
}

export default BasicExample;