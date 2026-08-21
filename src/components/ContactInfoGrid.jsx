import Icon from './Icon';

export default function ContactInfoGrid(){
  return (
    <div className="info-grid">
      <div><Icon name="shield" /><span><strong>Business name</strong><br />Shopron</span></div>
      <div><Icon name="phone" /><span><strong>Phone</strong><br />+1 888-556-2111</span></div>
      <div><Icon name="mail" /><span><strong>Email</strong><br />support@shopron.shop</span></div>
      <div><Icon name="pin" /><span><strong>Address</strong><br />6890 Distribution Dr, Beltsville, MD 20705, United States</span></div>
      <div><Icon name="clock" /><span><strong>Customer Service</strong><br />09:00 AM – 05:00 PM, Monday to Friday</span></div>
    </div>
  );
}
