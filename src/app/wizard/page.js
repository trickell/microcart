import Input from '../components/Input';
import Theme from '../components/Theme';
import BtnType from '../components/Button';

export default function Wizard() {
    return (
        <div>
            <h1>Generate Your New Shopping Cart Experience</h1>
            <form className="flex flex-col gap-4" id="wizard">
                <div id="first">
                    <Input label="shopName" type="text" id="shop-name" placeholder="Shop Name" />
                    <Input label="shopUrl" type="text" id="shop-url" placeholder="Shop URL" />
                    <BtnType type="next" showID="page2" hideID="first" />
                </div>
                <div id="page2" className="hidden">
                    <Input label="template" type="text" id="theme" placeholder="Select a Theme" />
                    <Theme />
                    <BtnType type="next" showID="page3" hideID="page2" />
                </div>
                <div id="page3" className="hidden">
                    <Input label="username" type="text" id="name" placeholder="Your Admin Username" />
                    <Input label="password" type="email" id="email" placeholder="Password" />
                    <Input label="confirmPassword" type="password" id="confirm-password" placeholder="Confirm Password"/>
                    <Input label="email" type="email" id="email" placeholder="Email" />
                    <BtnType type="next" showID="page4" hideID="page3" />
                </div>
                <div id="page4" className="hidden">
                    <label htmlFor="wz_products">Upload Products CSV File</label>
                    <input type="file" id="wz_products" accept=".csv"></input>
                    <a href="#" download="products.csv">Download Template Products CSV</a>
                    <span>Please use the CSV template making sure to include all required values.</span>
                    <BtnType type="next" showID="summary" hideID="page4" />
                </div>
                <div id="summary" className="hidden">
                    <h2>Summary</h2>
                    <p>Shop Name: <span id="shop-name-summary"></span></p>
                    <p>Shop URL: <span id="shop-url-summary"></span></p>
                    <p>Theme: <span id="theme-summary"></span></p>
                    <p>Username: <span id="name-summary"></span></p>
                    <p>Email: <span id="email-summary"></span></p>
                    <BtnType type="summary" />
                </div>
            </form>
        </div>
    );
}