import Input from '../components/Input';
import Theme from '../components/Theme';
import BtnType from '../components/Button';

export default function Wizard() {
    return (
        <div>
            <h1>Generate Your New Shopping Cart Experience</h1>
            <form className="flex gap-4 flex-col cabinfont" id="wizard">
                <div id="first">
                    <Input label="shopName" type="text" id="shop-name" placeholder="Shop Name" />
                    <Input label="shopUrl" type="text" id="shop-url" placeholder="Shop URL" />
                    <BtnType type="next" showID="page2" hideID="first" />
                </div>
                <div id="page2" className="flex-col hidden">
                    <Input label="template" type="text" id="theme" placeholder="Select a Theme" />
                    <Theme />
                    <div className="flex flex-row">
                        <BtnType type="back" showID="first" hideID="page2" />
                        <BtnType type="next" showID="page3" hideID="page2" />
                    </div>
                </div>
                <div id="page3" className="flex-col hidden">
                    <Input label="username" type="text" id="name" placeholder="Your Admin Username" />
                    <Input label="password" type="password" id="email" placeholder="Password" />
                    <Input label="confirm Pass" type="password" id="confirm-password" placeholder="Confirm Password"/>
                    <Input label="email" type="email" id="email" placeholder="Email" />
                    <div className="flex flex-row">
                        <BtnType type="back" showID="page2" hideID="page3" />
                        <BtnType type="next" showID="page4" hideID="page3" />
                    </div>
                </div>
                <div id="page4" className="hidden">
                    <label htmlFor="wz_products" className="px-8 py-3 m-10 bg-slate-900 rounded-xl box-shadow-xl hover:cursor-pointer">
                        Upload Products CSV File
                    </label>
                    <input className="opacity-0" type="file" id="wz_products" accept=".csv"></input>
                    <div className="flex flex-row justify-self">
                        <a href="#" download="products.csv">Download Template Products CSV</a>
                        <span>Please use the CSV template making sure to include all required values.</span>
                    </div>
                    <div className="flex flex-row">
                        <BtnType type="back" showID="page3" hideID="page4" />
                        <BtnType type="next" showID="summary" hideID="page4" />
                    </div>
                </div>
                <div id="summary" className="hidden">
                    <h2>Summary</h2>
                    <p>Shop Name: <span id="shop-name-summary"></span></p>
                    <p>Shop URL: <span id="shop-url-summary"></span></p>
                    <p>Theme: <span id="theme-summary"></span></p>
                    <p>Username: <span id="name-summary"></span></p>
                    <p>Email: <span id="email-summary"></span></p>
                    <div className="flex flex-row">
                        <BtnType type="back" showID="page4" hideID="summary" />
                        <BtnType type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
}