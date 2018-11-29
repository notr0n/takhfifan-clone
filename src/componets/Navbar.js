import {Box , Icon , SearchField , IconButton , Text , Button} from 'gestalt';
import '../styles/gestalt.css';
import React, { Component } from 'react';
import {ButtonToolbar } from 'react-bootstrap';
import '../styles/App.css';
import '../styles/bs/css/bootstrap-iso.css';

export default class SearchFieldExample extends Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }

    render() {
      return (

        <Box color="darkGray" padding={3} display="flex" direction="row" alignItems="center">
          <Box paddingX={3} >
             <div class="bootstrap-iso">
                 <div class="hidden-sm hidden-xs">
                    <Button color="transparent" text="ورود / ثبت نام" />
                 </div>
                 <div class="visible-sm visible-xs">
                    <Button color="transparent" text="حساب کاربری" />
                 </div>
             </div>
          </Box>

          <Box flex="grow" paddingX={2}  shape="rounded" >
          <div >
            <SearchField
              accessibilityLabel="Demo Search Field"
              id="searchField"
              onChange={({ value }) => this.setState({ value })}
              placeholder="جستجو: رستوران , باشگاه انقلاب"
              value={this.state.value}
            />
          </div>
                </Box>
          <Box paddingX={3}>
          <div dir="rtl" class="bootstrap-iso">
             <div class="hidden-sm hidden-xs">
             <Box alignItems="center" display="flex">
                <Box marginRight={1} padding={1}>
                   <Icon icon="location" accessibilityLabel="location" color="white" />
                </Box>
                <Text align="center" bold color="white">
                تـهــران
                </Text>
            </Box>
            </div>
          </div>

        </Box>
        <div class="bootstrap-iso">
          <div class="hidden-sm hidden-xs">
          <Box paddingX={2}>
            <IconButton accessibilityLabel="Profile" icon="person" size="md" />
          </Box>
          </div>
         </div>
        </Box>

      );
    }
  }
