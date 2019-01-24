import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance=new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9b5F93171fE7b62545643321F3006CEDd639E086'
);

export default instance;
