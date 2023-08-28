const express=require('express');
const QRCode=require('qrcode');
const app=express();
const ejs=require('ejs');
const port=process.env.PORT||3000;

const paymentMethods=JSON.parse(process.env.PAYMENT_METHODS||'[]');

// Add this line for static CSS
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) =>
{
    const qrData=await Promise.all(paymentMethods.map(async (method) =>
    {
        const qrDataURL=await QRCode.toDataURL(method.link);
        return { ...method, qrDataURL };
    }));
    res.render('index', { paymentMethods: qrData });
});

app.listen(port, () =>
{
    console.log(`Server running at http://localhost:${port}`);
});
