
import loader from "../../../assets/loading.svg";
import './styles.css'

const Loading = () => {
  return (
    <div className="containerLoading">
      <img data-testid="loading" src={loader} alt="loading" className="svg"/>
    </div>
  );
};

export default Loading;
