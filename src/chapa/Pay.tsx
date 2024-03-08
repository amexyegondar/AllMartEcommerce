import React from 'react';

interface PayProps {
  fname: string;
  lname: string;
  email: string;
  amount: number;
  tx_ref: string;
  publickey: string; // Assuming you meant public_key
}

const Pay: React.FC<PayProps> = ({ fname, lname, email, amount, tx_ref, publickey }) => {
  return (
    <div className='flex justify-center mt-6'>
      <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
        <input type="hidden" name="public_key" value={publickey} />
        <input type="hidden" name="tx_ref" value={tx_ref} />
        <input type="hidden" name="amount" value={amount} />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="first_name" value={fname} />
        <input type="hidden" name="last_name" value={lname} />
        <input type="hidden" name="title" value="Let us do this" />
        <input type="hidden" name="description" value="Paying with Confidence with cha" />
        <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
        <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
        <input type="hidden" name="return_url" value="https://example.com/returnurl" />
        <input type="hidden" name="meta[title]" value="test" />
        <button style={{backgroundColor:'#0041c7', color:'white',}}
          type="submit"
          className='bg-purple-400 w-40 h-15 rounded-md text-slate-950 font-semibold p-3 hover:bg-purple-950 hover:text-white'
        >
          Place Order
        </button>
      </form>
  
    </div>
  );
};

export default Pay;
