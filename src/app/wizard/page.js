import Input from '../components/Input';

export default function Wizard() {
    return (
        <div>
            <h1>Generate Your New Shopping Cart Experience</h1>
            <form className="flex flex-col gap-4" id="wizard">
                <div id="first">
                    <Input label="Shop Name" type="text" id="shop-name" placeholder="Shop Name" />    
                    <Input label="Shop URL" type="text" id="shop-url" placeholder="Shop URL" />
                </div>
                <div id="page2" className="hidden">
                    
                </div>
                <div id="page3" className="hidden">

                </div>
                <div id="summary" className="hidden">

                </div>
            </form>
        </div>
    );
}