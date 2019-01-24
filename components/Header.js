import React from 'react';
import {Header, Icon,Menu} from 'semantic-ui-react';
import {Link} from '../routes';

export default ()=>{
  return (
    <Header style= {{marginTop:'10px'}} as='h2' icon textAlign='center'>
      <Link route="/">
        <a className="item">
        <Icon name='ethereum' color="yellow" style={{backgroundColor:"green"}} circular />
        <Header.Content>Go Ether Me</Header.Content>
        </a>
        </Link>
        <Link route="/campaigns/new">
          <a className="item">
            <Header.Content style={{color:'red'}}>Create Fundraiser Campaign</Header.Content>
            </a>
      </Link>
    </Header>
  );
}
