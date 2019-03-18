import React from 'react';
import styled from '@emotion/styled';

const FormInput = ({
  text, value, id, onChange, password,
}) => (
  <InputContainer>
    <Label>
      <InputField type={password ? 'password' : 'text'} name={id} onChange={e => onChange(e)} placeholder={text} />
      <InputLabel>{text}</InputLabel>
    </Label>
  </InputContainer>
);

const InputContainer = styled('div')`
  display: flex;
  background: white;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  margin: 20px 0;
`;

const InputField = styled('input')`
  box-sizing: border-box;
  border-radius: 5px;
  border: 1px solid rgba(0,0,0,0.2);
  height: 45px;
  font-size: 1.1em;
  line-height: 1.1en;
  z-index: -1;
  background-color: rgba(0,0,0,0);
  width: 100%;
  padding: 10px;
  
  ::placeholder {
    color: transparent;
  };
`;

const Label = styled('label')`
  position: relative;
  flex: 1;
  box-sizing: border-box;
`;

const InputLabel = styled('p')`
  text-align: left;
  float: left;
  position: absolute;
  top: -5px;
  left: 7px;
  padding: 0px 6px;
  z-index: 1;

  :focus + p {
    background-color: white;
    color: rgba(0,0,0,0.8);
    font-size: 1.1em;
    transform: translate(-6px, -23px) scale(0.8);
    transition: transform 200ms ease-out;
  };

  :placeholder-shown + p {
    background-color: rgba(0,0,0,0);
    color: rgba(0,0,0,0.5);
    font-size: 1.1em;
    transform: scale(1);
    transition: transform 200ms ease-out, color 200ms ease-out;
  };

  + p {
    background-color: white;
    color: rgba(0,0,0,0.8);
    font-size: 1.1em;
    transform: translate(-6px, -23px) scale(0.8);
    transition: transform 200ms ease;
  }
}
`;

export default FormInput;
