function Form() {
  return (
    <div className="w-50 m-auto">
      <form method="post">
        <fieldset className="">
          <legend className="fw-bolder">Fill this form</legend>
          <div className="form-group mb-2">
            <label htmlFor="emailinput" className="">
              Email address:
            </label>
            <input
              type="email"
              id="emailinput"
              class="form-control"
              placeholder="enter your email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone
            </small>
          </div>

          <div className="form-group mb-1">
            <label htmlFor="passinput" className="">
              Pass-word:
            </label>
            <input type="password" id="passinput" class="form-control " />
          </div>
          <div className="formcheck">
            <input type="checkbox" className="form-check-box" id="checkbox1" />
            <label htmlFor="checkbox1" className="form-check-label">
              check?
            </label>
          </div>
          <button type="submit" class="btn btn-dark">
            Submit
          </button>
        </fieldset>
      </form>

    
    </div>
  );
}

export default Form;
