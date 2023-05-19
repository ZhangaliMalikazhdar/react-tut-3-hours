import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";

const Login = () => {
    return (
        <div>
            <h1>Page for login</h1>
            <form>
                <MyInput type='text' placeholder='Write login'/>
                <MyInput type='password' placeholder='Write password' />
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;