import '../Components/LoginPage.css'
import cauroselImg from '../assets/10526367.jpg'
function LoginPage() {
    return (
        <>
            <div id='login-page'>
                <nav>
                    <div id='navbar'>
                        <h1>Recyclick</h1>
                    </div>
                </nav>
                <div id='caurosel-img'>
                    <img src={cauroselImg} width='70%' height='500px' alt="" />
                </div>
                <div id='login-content'>
                    <div>
                        <h1>Rearn Rewards For e-waste recycling</h1>
                    </div>
                    <div>
                        <p>Get paid to recycle your used electronics.it's free and easy to start</p>
                    </div>
                    <div>
                        <button
                            onClick={() => {
                                var loginPage = document.getElementById('login-page')
                                var rewardPage = document.getElementById('rewards-page')
                                loginPage.style.display = 'none'
                                rewardPage.style.display = 'block'
                                console.log('working');

                            }
                            }
                            id='signup-btn' >Sign Up</button>
                    </div>
                    <div>
                        <button id='login-btn'>Log in</button>
                    </div>

                    <div>
                        <p>By signing up,you agree to our Terms and Service and Privacy Policy. </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default LoginPage