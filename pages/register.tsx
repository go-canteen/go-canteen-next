export default function Register() {
    return (
        <div>
            <a href="./">Kembali</a>
            <h1>Daftar ke Canteen</h1>
            <Form />
        </div>
    );
}

export function Form() {
    return (
        <div>
            <form action="#" method="POST">
                <label htmlFor="name">Masukkan nama Customer/Merchant</label>
                <select name="role" id="role" data-testid="role">
                    <option value="customer">Customer</option>
                    <option value="merchant">Merchant</option>
                </select>
                <input name="name" id="name" type="text" placeholder="Nama Customer/Merchant" required /><br />
                <label htmlFor="email">Masukkan e-mail kamu</label>
                <input name="email" id="email" type="text" placeholder="Alamat e-mail" required /><br />
                <label htmlFor="password1">Masukkan kata sandi kamu</label>
                <input name="password1" id="password1" type="password" placeholder="Kata sandi" required /><br />
                <label htmlFor="password2">Ulangi kata sandi kamu sekali lagi</label>
                <input name="password2" id="password2" type="password" placeholder="Kata sandi" required /><br />
                <button type="submit">DAFTAR</button>
            </form>
            <div>
                Sudah punya akun? <a href="/login">Masuk disini</a>
            </div>
        </div>
    );
}