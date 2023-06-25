import {Component} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  Button,
  Input,
  InputContainer,
  Para,
} from './StyledComponent'

class EditTable extends Component {
  state = {
    text: '',
    cond: false,
  }

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  onClickButton = () => {
    const {cond} = this.state
    this.setState({cond: !cond})
  }

  render() {
    const {text, cond} = this.state
    return (
      <MainContainer>
        <SubContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {cond ? (
              <Para>{text}</Para>
            ) : (
              <Input type="text" value={text} onChange={this.onChangeInput} />
            )}

            <Button type="button" onClick={this.onClickButton}>
              {cond ? 'Edit' : 'Save'}
            </Button>
          </InputContainer>
        </SubContainer>
      </MainContainer>
    )
  }
}

export default EditTable
