
import  Input from "../common/Input";
import Button from "../common/Button";

function Register() {
   const handleSubmit = (e) => {
  e.preventDefault();
  alert("Registration submitted!");
  window.location.href = "/";
};

    return (
        <div className="auth-page">
            <div className="auth-card">

                <div className="auth-header">
                    <h1>🕌 ziyarah</h1>
                   <p>Your Spiritual Journey Companion</p> 
                   </div>

                   <div className="form-header">
                    <h2>Create Your Account</h2>
                    <p>Join our community and start your spiritual journey today!</p>
                </div>


                <form onSubmit={handleSubmit}>
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        type="text"

                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                    />
                 
                    <Input
            label="Password"
            placeholder="Create a password"
            type="password"
          />

                    <Input
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        type="password"
                    />
                    <Button type="submit">
                    Create Account
                    </Button>
                </form>
                <p className="auth-switch">
                    Already have an account?{""}
                    <a href="/login">Sign in</a>
                </p>
            </div>
        </div>
    );
}


export default Register;