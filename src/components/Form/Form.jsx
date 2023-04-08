import * as S from "./Form.styled";

const Form = () => {
  return (
    <S.Form>
      <S.Label>
        <S.Input />
      </S.Label>
      <S.Label>
        <S.Input />
      </S.Label>
      <button>가입하기</button>
    </S.Form>
  );
};

export default Form;
