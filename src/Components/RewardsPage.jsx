import '../Components/RewardsPage.css'
import giftimage from '../assets/gift.png'
import image3 from '../assets/gift-card-two.jpg'
import Rewards from '../assets/trophy.png'
import Rewards2 from '../assets/trophy 2.png'
import tag from '../assets/tag.png'
import find from '../assets/find.png'
import account from '../assets/account.png'


function RewardsPage() {
    return (
        <>
            <div id='rewards-page'>
                <div>
                    <div id='nav'>
                        <h1>Recycle for Rewards</h1>
                    </div>
                    <div id='gift-content'>
                        <div id='gift-content-1'>
                            <img src={giftimage} width='25px' alt="" />
                            <h3>Earn Points</h3>
                            <p>Get points for recycling your e-waste</p>
                        </div>
                        <div id='gift-content-1'>
                            <img src={giftimage} width='25px' alt="" />
                            <h3>Redeem Points</h3>
                            <p>Used points to Redeem gift cards</p>
                        </div>
                    </div>

                    <div id='button'>
                        <button>Shedule a Pickup</button>
                    </div>


                </div>
                <div>
                    <div >
                        <h1 id='offer'>Offers</h1>
                    </div>
                    <div id='gift-card-detail'>
                        <div>
                            <img src={image3} width='200px' alt="" />
                            <h6>$20 Amazon Gift Card</h6>
                        </div>
                        <div>
                            <img src={image3} width='200px' alt="" />
                            <h6>$25 Amazon Gift Card</h6>
                        </div>
                        <div>
                            <img src={image3} width='200px' alt="" />
                            <h6>$50 Amazon Gift Card</h6>
                        </div>

                    </div>
                </div>

                <footer>
                    <div>
                        <img id='reward-img'
                            onClick={() => {
                                var reward = document.getElementById('reward-img')
                                reward.src = '/src/assets/trophy.png'
                                onmouseleave(() => {
                                    reward.src = ' /src/assets/trophy%202.png'
                                })
                            }}
                            src={Rewards2} width='30px' alt="" />
                        <p>Rewards</p>
                    </div>
                    <div>
                        <img src={tag} width='30px' alt="" />
                        <p>Offers</p>
                    </div>
                    <div>
                        <img src={find} width='30px' alt="" />
                        <p>How it works</p>
                    </div>
                    <div>
                        <img src={account} width='30px' alt="" />
                        <p>Account</p>
                    </div>
                </footer>

            </div>
        </>
    );
}
export default RewardsPage