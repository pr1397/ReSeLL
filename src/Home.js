import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
      
        <img
          className="home__image"
          src="https://eavf3cou74b.exactdn.com/wp-content/uploads/2019/08/06103117/19-1.jpg?strip=all&lossy=1&w=2560&ssl=1"
          alt=""
        />
        <div class = "centered">ReSeLL</div>
        <div class = "right">Learn.Share.Repeat.</div>

        
       

        <div className="home__row">
          <Product class="product"
            id="12321341"
            title="Data Communications and Networking 4th Edition"
            price={500}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41F8dUDF2CL._SX198_BO1,204,203,200_QL40_ML2_.jpg"
          />
          <Product class="product"
            id="49538094"
            title="Introdution to the Design and Analysis of Algorithms"
            price={400}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81FraWgsXXL.jpg"
          />
        </div>

        <div className="home__row">
          <Product class="product"
            id="4903850"
            title="Software Engineering A Practioner's Approach."
            price={250}
            rating={3}
            image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoGBxQTExYTExMYGBYZFhgcGhgaGR8ZIRscGB8YGRwkGR0cHysjHRwoIBoaJDQjKCwuMzExICE3PDcvOyswMS4BCwsLDw4PHRERHS4oIig3MjA2MDAwMTAuMi4wMDAwMi4zMDAwMC4wLjA2MDA2MDkwMDA8MDswMDAwMDA8MDAwMP/AABEIAPoAygMBIgACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAAAAQMEBQYHAv/EAEcQAAIBAgMEBAkKBgEEAQUAAAECAwARBBIhBTFBURMiYXEGFTJzgZGTstEjNEJTVKGxwdLwBxQkM1Ji4XKSovHCFhdjZHT/xAAaAQACAwEBAAAAAAAAAAAAAAABAwACBAUG/8QAMhEAAgEDAwIFAgQGAwAAAAAAAAECAxESBCExQVEFEyJhkRRxgaHR8BUjMjOx8TRCUv/aAAwDAQACEQMRAD8AqG09oTCeYCeUATSgASOAAHYCwB0pv4xn+vl9q/6qPan9+bz0vvtSCKSbDt7Nwud/YDXYSVjntu4t4xn+vl9q/wCqh4xn+vl9q/6qRCHgL92v4cK66JrkZTcEg6cQCfXYVayJdinjGf6+X2r/AKqHjGf6+X2r/qpFVvc6ab7kD8aPozyOovu4a692h9VSyJdivjGf6+b2r/qoeMZ/r5vav+qkLHkaKhZEuxwdoz/Xy+1f9VF4xn+vl9q/6qQoqlkS7HHjGf6+b2r/AKqLxjP9fL7V/wBVIUVDFBuxfxjP9ol9q/6qI7Qn+0S+1f8AVSFCq2QcmL+MZ/tEvtX/AFUXjGf7RL7V/wBVIGhQxQcmLHaU/wBol9q/6qI7Sn+0Te1f9VI2ojQxQchbxlP9om9q/wCqi8Yz/Xze1f8AVSNC1VxQcmK+Mp/r5vav+qi8ZT/Xze1f9VJWrm1SyDkxbxnP9fN7V/1UDtOf6+b2r/qpC1EaFkHJi/jPEfaJvav+qtL2FinOGgJdyTDGSTIdSVF71lhFah4PfNcP5iL3FpckXiyi7U/vzeel99qRhlKsGG8X58QRw13Gltqf35vPS++1N62rgyPkcJjLKy21NrHlqx46729NcPi3O866668cwPH/AGNJUKFiHfTnrf73vvG+54Ht3G9dtjGPLcQd/EODx/3b7qRoUSCwxjWt368dQRz08o676TkcsSTvJua5oUCBUKOiqBCNCjoqhAURo6FQJzQrqitQIc2oGjtQoWIFXJFd0KFgpidqBrq1EaFg3OKFdUDVbBEyK1DweP8AS4fzEXurWZWrTvB75rh/Mxe6tUkMi9ig7U/vzeel99q4wOFeaVIYxd5HVVB0F25ngONHtQ/Lzeel99q72PFM88S4fSYuOi1A669YatpwO+nSk1BtdhKV5bkvF4OwSu0EGM6TEqH6jRMiSNGCWWKQk6ixtca2NV0OLA86smzpocdiP5efCrFiJC4M0LMhWRQxJlhJK5bg5iLUlNjzhMPhehihYyxtJI8kay9KwkaPo1LblUACy69a9YKepnB4yu2+jt83NEqKe62Qy2RgYnSeWeR0jhEd+jUOxMr5FsCQLA3J48qavhWCCW3yZkaNX3ZmUAkWvcaEH01acbN/KrtSKBUCRyYUqrRq+UysuZTnBzBb2APk8KjpdoOuy4UHR2bETRm8aMcvRodCRcPqeuNd3KpHU1HLJLZtJXfSwHSilZ82ZA3oXq2YeOILDtJ4laGLDESx5QFaeJhEoI3EvnV/Qa4x2w+iEkUKK7YvFRx4cta3QgCYlTvCnpEQkcARTPr45Ytf77Ffp3a9yrBqGarVjcRFNhcWM8EjwrGyCHD9CsR6RYyFkazSKbkWI1te9NvCDapgSKKOCDK+BhZy0YLO8iHrF94K2BFra770Y6xydlHe/f2BKhbdsr1+FK4KDpJI4726SSNL77Z2C3txtfdVzxLYSCZcLI8PQCKMNEMK7yvnjD9IsyqSXJOYFTYAW4GqjsL5xhv/AOiHXn8otWhqfMjJpNWV0R0sZJNkhjNmYKKR4nx0uaN3RrYViMyEqbEPrqKgg3Ow9NWDwk23H/MYqP8AlMMGE06dJ189w7rn8u2fjutenZ2gYF2eiQwkSwRmUvErtIGldCGYi4FuI1vSadepCKck233aLypxbaW1iqlrb6VwsQkJGdEsrNd2yg5RewPFjuA4mrTHgzCuKGF6FJUx0kQefJ/aUEokZm6lwblvpWtQbFJNinjDRyRxYGY5UUGJZhB8oYdPIDKLW0BuRRetvey4VyKhbllQzCgTzq0DaRw8WzwkMJEsQMpeJXaQdKyWLEXAty1p0+FgwiYl1kjjb+elhWSSEzhEQZlRVsQpN/KO8DSo9bbmPPBFQv1KaaK/GrjhEwjzzzplCx4SOW7Qv0SyswR5FhIzFALMBqAT2UWEmw0+IwJDRySnEZJGSBoo5I7XGZWUKXU6G3Ai+6p9cr/0vgn077oqeGjDuqZ0W5AzOcqrfi7fRXtpN7AkXBsSLjcbG1xzB4GrDs3aRxGLw0UkMARcUoUJEqWTNlyEjy03HrXN+NdHGHD4QyxRw9IcdiEzvGshVFVSAuYWA/KrPUSTSx3dtrgVJNN34K2TxrnMDxq6/wAoonxEsMcSSnB4aaPpABDG82TpLZ+orG5yZtLk1G+FO0GMUEBkiaTK7YhYchjzBrxElBlEuUtmy/63oQ1Wc1FR59wujjFtsrlaf4PfNcP5iL3VrM60jYI/poPMx+6KfNcFIvYpO04F6ebf/ek4/wC7UisIBBBYEEEEMQQRqCCNQRzpxtQ/Lzedk95qShjZ2VEF3dlVRzZjYfea2qMcd0YHOWWzJHE+EeKkQo0/lDK7qiJI67rNIqhiOeutJbN2tPh06OGTKgbMqsiSBGP0o86nI3dTrwp2QMPKoRZBG6tl6QWYtG7RubH6LFQ4/wBXWlF2fCMNHI6hc8EshlMwB6RHlWNFiOrhiiLoPpE30rP5dBR2it/YZnWva7uiIEj5ZVLsRMVMt+sXKNnUljrfNrpSuFx8sUTwxvaNySQVVrFhlYoWBKEroSttKl9r7KhigZ8oWyYfIwlzs8skccjpJHb5MZDIwNx5I33tXOO8HCkOGYK6vI8aSM6nLecZ4ynMBbhrHytKKdGStiufzRLVU+SGEziE4cOehMgkMfAuBYG+/lpuvrRzYqRuhzSN8ioWIg2MYBzDKQN97a9gp7tJ8MjyIsD3ilZdZCRIqFlbpNAY2JAIy6bx204xmChM8kSRlFTDPLfpC5ZuhWVb3GgBNrDeKtjS5ce74QL1P/Q3xHhBiXDKZRldWWRVijUSZt5ey9Zv9t44VH4lzIVMjZisaRruFkjFlGm+w41I4lYf5eF1hKvI8iFukYgdH0eoUi3Wznu0pXHYWCATu8bSKuLlhRM5TKkQzElgCS5DKBw3k3qsY0Y8Rs/sFupLljWLbmJWMRLMQoTIrZV6RUP0Uly51XfoDUfAuRlZdGRlZTyKkEG3YQKsk3g6lsRHG7GZMR0cAO6S0ZlyNwEhUaHcWW3GjfY8CNiLhLRyYZE6WZohaWJ5G6wUktdRYcr0E6Mb2jz7Baqu12MG8K8Xe5mUk7yYYTe/PqVGPO56K7E9EoWPd1VVi4G7XrEnW9WHZ2yIHgjlkUBWGIeR+ls0SRsFUpHYlwCyg6a31tUfspMO4YyKqusUeRJJTEkj3+VJkscht5K3A9VqEYUVe0ePYMnVdry5Hez8UzRM8WLjjxEk7vOJnVEcEdUojoYybk5jbMLAbqa7bxqLMGwzR5/5fo5pIUCxu7hlk6NSLWKkDMALndTHaWHySyRhHGVyFR7FxyDZdCe0aHfxqfxvguseJwkTLIEkkWKQsCt5EZVkMZI/tnOpU9hpK08ITyb2d9rL8xnnTlHHtbcrUuIdhEGa4iXLGLDqjNn4b+sb606w+28QjyyLICZWzSh0R0dr3uUYZQwO4gCpXC7Jhd1BiAfocU7QLiFcXiVWjLSDyA5LAgnct9L13hNiwuZciKzrFhyIjiAESWWRo2TpRo2mQgc2tc2pklRas4/u4Eqid8iDG1cR0/8AMdM/THQubG62tlK2y5LaZLW7K7m23iHkjlMvWhN4gqKiRnecsajLqd/OnmLwmHi/mJMjSJHNHFGhcoMzI7yZ3ChmCtGyLoL7zTvZvg3HLipYwJTCscLKVGZ1OJEfR58o8lM5LHTRDzouNHlrhdunYl6nFyuYWVo5FlQ2dWDq1gbMDe9jpv4UcuIdo+iZrp0jyZbD+44sxvv1HDdUhFhooYs+IiaRzPJCUD5AgiCGQ3AJLkuAAdNDe96Wg2LHJCsqypHfFSR/LP0ZaNViZbAAjpOub+ii/Lvdr8QJz4uHsfGlhKxxIixQjhjiaRujjMSaMrWUqzAAABxbjvpPwkmjaOFWeGTEBpOkkw6hU6M5ciuVAV5L3NwNBpxFMds4ZY554kvljmkRb6nKjsoueJsKbWpK0sc1UT/C3sM8944sTKVo+wV/poPMx+6KzsitE2GP6eHzUfuin1FwVg+SjbTPy83nZPeaiwWLeGRZIzZ1N1awNjYi+vHXTkbGhtP+/N56T3mpvWhbxsZ5L1C5xTmNYixKKxZQdSGYKrWJ1sQq6btKKaYuEDahEKLpaylmcjt6zsfTSN6FRJdiruO5doSN0gZgRIsSuCBqIgoj7iAoFxwJ511PtWZzKXkJ6UgydpVg6lR9AggWy2sNKZihUwj2JlLuPsdteWYFXK2ZgzlUVDI4BAaQqAXIud/MnfrXLbRkLtIW6zxmNjYaoUEZFv8AoAF6aV3DEzmyKzHkoLH1CioRXQq3JijTsVRCeqjMyi24vlza8fIX1U5TbEoMjHI/SSdIwkRZF6S5OZVYEK3WO7hob0h/ITfUyf8AY3wohgZfqpP+xvhQagyJyR3LjpWDBnJzS9KTuYyajNmGoOvCnEm25naV36OQyujydJEjgtGGVSARYEBiNOdNRgpfqpP+xvhXQ2fNu6GT2bfCg4Q6kzn3O49pyqUIYDo+kyDKLATX6QEWsVYEix3DdXGDxjRKyqEZHC50kRXVstypIYHUEmx7TRHATfUy+zb4UY2fMdBDLfl0bfCjjAmUw/5+TphOWzShw+YgHrKQQbbrCwsNwsK6w21Zo8uWQ9WZZQW61pFBAYX7CbjcdK58WTfUTezf4UR2dN9RL7NvhQag+xE5ruI4Sdo82Q2zI8Z0BusgysPSDQinZY3jU2STJnFt/RnMtjvFjrpS3i2f6iX2bfCiOzZhvhl9m3wovH2CnIU8cSlpWYo/SlTIrxq6uV3MVItmvc3HM8zXGK2pNIHDyMekkEjkdUs4UotytrAKbBRoOVF4tn+ol7+jf4UXi2b6iX2b/ChhD2LZT9xcbcnzO5KMXkEhzxo4EiiwdQwsr23kb+N6aS42RlCs5YCV5LnUmR8uZieJORa78Wz/AFEvs2+FF4vm+ol9m3woYw6Byn1EsTO0jvI5u7szMbWuzEkmw3amk6cnZ831Evs2+FNyLaHQ8qO3QF2FWhbEH9PD5qP3RWeGtC2J83h81H7opdVcDab5KLtP+/N56X32pCl9qf35vPS++1N6vHhFZLdh0KKhVrlbB0L0KFG4LAvVk/h3LlxLGxI6Fr24dZPVVbqyfw5P9S2/+y242+klUqO0WRLc0aKYNqpO7nf18aWaFGGot2j400aIE7gTpYjqn4GlomZTa+bvFj6tx9FYnLsPiu4JdnaX8r0+jQ0gMKw0zN6eHdUhHOAbnS/IfiKXXKwG49o/elDzGuQ+VF8EVIXGj6jnuJ7+dJA3Nr2IvY31G/191S0uGI1GoPP08v3300aEE7iDy9PDnpxqymmVdNoEO0SCFkPc/Pdw4d1Oyb8dfxpk0YIs49P3UmkrRb+tHz3kb/X30Gk+C0ZNcjkll1BPdSqTZhv/AOL0EYOoINwdxpCRCDcb9/fSxy4CineE7yYze4/x7V7OzhTiVbjMp/5pNXzC278v+KRM/QXzeRxvuXt7BR5Bx9jokjUXI49h40Ul9GBsRx/fCnEig9YbjvpsbqdDp+/uoojFTJmGl+RHqrJfC1UGMxAjtl6T6OovYZv/ACv6b1qhB8td++26/r+6ss8KsIsWKnRd2fNblnAcj0FjWjT/ANTEV36URVaJsUf08Pmo/dFZ4RWhbG/sQ+aT3RTa3QXSfJQdpn5ebz0vvtTeltqH5ebz0vvtSF6kXshkluHR1zehVrlbHVCioVLgsHU94CSBcQ1zY9EwB5HMluOvdUBTrZs2RiTGJBl1Vgbbxrpu76EldWIuTW4MQLANY/nwvTkx34gjkfje/wCNZxs7b6J5LyxD/Fj00fpDdYehvRVw2TtYTp1SDb6UZzDdfVSM68NCLdtYKlKUd0aYuL2ZKOWGg9TG/qb8taSSTXqExvy4H0biO0UpHPcAGzDvBpDE4a9yhB/1OvqPClRlvaRJQa3Q7w+3MpCzLkJ+kNVPwqRYK4uD3G+noNU6XaBS6yLcW1Vt/r4j93rvB4hk6+FkBH0om3ejip7d1McHyisaie0ixzRkeV69/r59+8UjcrpvGnb6QeNc7K2/FiLxsCkg3xvoe9DxHaKVxWGt1hcrv7v3z9Y40Yz6MMobXiMJFaI547lTqyb+8ryPZT+LELKt1PceR7aRzH18+fxpDo8jFlvY3zDgD3d3oq8lcpGWL9hzIhBOlm/EV1dXWxtrpz/Yo0mDAA+g8q5niIPb+I7KX9xt7rY5wzmM5D5NtD91u6nE0YGh3Gm5IcWO8V1hJrjI28c+3nVn3AtthPN0bWNrHcP3376zXw4nR8bO0e64U9rKoVj6x91afiMPmFie4926sv8ADLC9Hi5QAAGyvpuu6gkjva5rRp7OQivdKxCmtB2MfkIfNJ7oqgGtA2MfkIfNJ7op1XoJpdTO9pn5ebz0vvtTe9KbUPy8/n5ffakL0pPY1yW4pehSeajzVbIGIpejBpO9HRyBYUvXcDsCSt7gbxwHfwpAGlYHsfKy9v8A6qtSTUG0MowTqRT4HMmKBPWFj/kOr69LH8TRxTZSHRiGG5lJUg+g0FcEWdQQeQvu4jgfRuoPs8b42tu0JuNeR4emscNZjtNfidafhmavS+OpZNleGsq9XEKJlv5Yskg38QLN3Grbs7beHxAvFLmtclT1ZE46qd47RcdorKXV18tfTy/4/etKxuNCDYjcRoQewjW/d6qf5dKqrxZzakKlJ2kjV8ThUmQ7nUbzuI32uOG7fVX2js2WI54iew3PCoXAeEeIiYNnLak5uNjv13N+91XLYnhLBirI5WOQ8zZW9e7upbhOl7oS1GfOzIOLa0c3yeIGRx5L7iDwP+p43Gh5VPYDwglw9lxF3jO6UbwP9wN4/wBhTHwi8GM17LrqQP0E+6fvqvYPakuGOSQZ4763Gq8PQfx43opRmtgLKDNMaNZBniIYEbhqCOzX7vwpNGO8G9tLn8D+++1VPZeOaH5XDNnjY9aPcO3KPoN2bjVo2ftGPEAvGeuLBlOnoYc+R41Rpx54CsZ8bMTmjKksoup8tO3dccj933U5w04bqMd/knl2Ht7KRxBtfs0YW1Ho5ev0jUARgjUXBtY9u+9+FW2aKq8WLSKVO7SuJOBHD8KWRiRlJueHC4+NIMCpsdx3HT03oIux7A4YD9m9Y3tXEPJNJJIpV2diykEFTutY6iwFrVrmFkysOWl/3yrIMaxaWQk3Jkck3ve7Hid9adKrSYjUP0oQrQNjf2IfNJ7orP60HY39iHzSe6KdV6CaPUzLap/qJ/Py++1N81K7WP8AUT+fl99qbZqyJ7HQa3Fb0L0kDXV6NwWFb0A1Jg0M1G4LCoanezVzMRlDdU6H0bqYg1K+DWG6SVluQchII5grv7NaXqJ2pSbHaZfzY/c5/lrf2z3xt2fifv7qUgxNjaxHZxH/AEn6Q7N/bTjGQNfLIL33MN57juPcaa4hSB1hmXTXiPz/AHwrkxnGoj0UKnlu62/wSCWdeBH74cKQlwC2utx3a+scRTOKcp1gcw58R38/T66f4TFLJe2jce30VRxqUnlB7G+M6GqWE0rjJ8yatqp+kNR6+ff6xRrzB9P7/PXvqQJ1sdCfU3x/Gmk+zyDmi0tvTePR8K6Gn8RT9NT5ONrfBXG86O/sWTwa8NmitFiQZI+Db2Th6R2b+6rBtTYseIi6aE5lI6rLrYW3EHf3GszjmDaEZWHA/lf8/XwqV2Ft6fCteNrqT1o2Nlbv5Gtc6N/XTZwmremaO+hmw0maOwudUPkuONh93ZUvg8R0h6bDsY5V8tD/APL/ACjP+XCp1f5faUReLqSqbPGw1Vu0fgwtf7qqmO2Y8MguSjjyW3H4EHlVI1FLZ7PsLlBrf8y5bL2uMQMtxFOlrqeI/wDknI8L1J4Zla43EGzL/id/37xz4VSsIwxBsT0WIXVWUWDW4r+a99Tezse0h6OWyYhRZHPkuDwa29T6wako24IpX5JuWPgT3c6INmuj+vmOfeKPCP0q2dSsi6EX3c8rfSFHicMNO8EMDuP79dBNFrMSWIjS+7d29/Osq25MHxEzqrKGlc2beLk3v6b1ranOMu5h8eHfWTeEsHR4qdCSbSubk3PWObX11p0z9TM9delDCtB2N/Yh80nuis+rQNjf2IfNJ7op1XoKo9TLtr/OJ/Py++1Nac7Y+cT+fl99qa1iXB03ydXoA1zQvUK2OwaO9cUd6NyClWP+HYU4lg+7oW95KrN6nvAXHJFiCXDWaJl6trglkIOunCsuuu9PJLsO0q/mx+5fsZsdWuVsQeHA+ngaiMXsFh1kBYDeD5ajX0Mvb+FS+BxwPWhcOn0gN4vvuDqPTUtgysnWQ6jUA/lxB7K8hCvVpOzPQSVjMMbsojrJp+B9W78KipFIOt1bnu/ffWtbc8H7qZolv/mn4kDn2VTsdsxXFx6t1j/ryNdihrmtpcC3RjNZQdmQWH2l9GUXHP8Ae+pCJrag3U7uzuPLvqKxmAKX4j7x30lhsU0Z08k71O4/CtcqUKiyp/A2jrp0nhW+f1JzF4BZddFkG48D2Hkai3LRnJIu7Qa8P9Ty7Dp3VJ4TELKt03gajj6RxHbRzZZFswuPvHceVTT6qdGVnwW1WjpaqOS2l36MY4LFvA6zQuVYaXFx3hhy7K0XZe1sPtGLJIoWUC7LuIPNOOX8KzbEYVo9d67s34Bv38KSgxLRsJI2KOpuGG9e3tB9VdScYV45we55qpSnRk4TRbdsbPfDuBJmKXuko3qeF/3rUphcSJ1CSkLKozI43N2j8xS/gz4RR46MwTqvS5esv0ZF3Zkvu5kcO6ovaGzWwbWJZsOT1H3mJu3kO2lQqb4T5EThb1LgtOyMUVa0os+gzcGHC3A/jU6yC3YeFVLBv0gy36w103G/Fezs/YldjbTKkQTaPuRtwbs1+l2UJpp3RenJSVmPJcPcjfcbj91ZJ4UYgPi8QwAA6VhpzXqk+kgmtovqL89KxTwmw7R4vEI4UN0zsQpzAZznGp7GFa9JK7Zn1MLIY3rQdjD5CHzSe6KzytC2MPkIfNJ7orTV6CKS5Mu2z84xHn5ffamlOts/OcR5+X32ppesK4Oi+Q6OioUQBijvXNCgQ6vU54G4QyzuobKeiY3IuDZk0PYaghVs/hUR/OPm3HDuP/KOsuum46eUl0Q7TbVYv3H77HlhYul1K8UvlP8A1AdZV7dwp7gNtErZ1fddiujDkwH0hodRvq4PhEO4dxBOh7CNR6KjMZspSys63K7nUlWsd4YDQjtA9A315eGphVXqW56DzBDC+FUsT5Xu44PpcrztazjXsNHtRIpfloCBm1Ze3TW3DfURtXCuvWzl4gbi9g8d+DDcVPMXU8DTbA4qzavl32NtLj97j+FyGuF1dFoxj/UjvE4W/D0cf+agsZso6lOeoq7y4ZJdwKtbVd/bdTxU1HYnAEnXRzubg3Drcj21enqHTZWSjNWkUrDZkbRip/f31MYScS6eTJ9zd3bR7VwW/OtiOPLlfs5Go7oCN2//ANeo1tdSNRXKQzocbxJjDOoOR9AdNd1+RphtrYzRDOlyg38ShP4oaXixQkGV9G3X59/bU3sh84MT8AcpOuh0Ia+9bUaVeVCWS46o0V6NPV079ejKThcS0bBkYqym4IPkn4f+q0vwY8KI8WphmUCTL1lsLMBoSB+I9VU3wl2LkIdFIO5l36ndbncceO4674TDzsrBlOVgQVN9zcvTz9FdR4aiClF79DztSjOlJxkv33NLlwRwjjU9AT1W39ETwPNKmpMOJ0tudbH0cCp5cjUH4J+Ei4iIpLvHVdT2/kbG3pqRw4OGYAG8JvkO/Jfh2DsGnGlwrNvCfK/Mzyp4u64JrYmPL/JyGzjQ349vfWQeEGKeXEzvIFDmVgwU3AKdTQnUjq7+NazPESyyLoVI3fdfmDWQ7ZW2JnGbN8tL1ufWNbtJa7aEV22lcbVoexv7EPmk90VndaLsT5vD5qP3RWqr0EU1yZXtk/1OI8/L77U1vTrbXzjEefm99q42ZgHnmjhjtnkcItzYZm3XPAVhXBva3EL0VSG1NhzQHrLnXo1k6SMMy5HLKpY5QVuysLMBupvLs6Zb5oJFygFrxsMoY2UtcaAkEAnfaimgWY3rqpDZuwJ5pWhCdG6RtI4kDJlRbEkjKWO8aAHfTLF4cxu8bZSyMVJVgwuP8WGhHaKN1wSxxVs/hSf6x+rmH8u9+wZ49aqQq1fwtxHR4xm//A4/8o6y65X08vsN0/8Aciaoi3F1Nx94roMD8fjyrhJFfVeq3Zx7ufdQLc9DzHH49x9FeHlHF3O3YbYrZqvrbXXXcRff6Dx4HiKqe1NjtCddYzu36b7ei/pHAkaVdy+7Wx4H8v8Ag0nioA4IKjtXnf8Ax5d1Po6lxdmXjJopWBxpQrc6Dc3K/PgO/ceNt9WOFllXgG4jnbX98ahtobK6M5l8m+/v4EcD9xoYOTKbHQjXncDl2dg1HDkdslGorrkvKN1dD7GYIMN2o3G1yBx71qvTbNtmHZe3Fe0c1/Zq1YacP1r8Rc6aE7t2hvz40WNwgPWA1G8AbuZXs5rSoVZU3iy0J22kUbFYK92XePKHLtH+v4UtsXHMHCsOsuveONSu08GR8pHvXeBrYHlzX8KjGA0kXQg33eSeY7OytsZqcS2DpPOHHVFvxOBE0Y3aroew7wbcPwrPdtbKaNz1TlJseNj/ALdv4799aPsbGLMgZRlOgK8jwKniDz9FJbZ2YJQbDrAaqPpAcu3lStLq5UKmL4EzjCusXs+jMz2XjTFIGv2MP8l+INiD2VpPgtthcSnRObNpu5jiKoe29ilDnQEod+mqnuGtq7wuOaOQSJow8pf8reVbkeNu/lXcm4ahKcOTk1tPUpXUlsa1s2cpIiNxuAbaEDge3s+FZBtkEYifMCp6aQkNvF3Yi/oINah4P7WXEIpuNbegjl22rNPCgn+cxV2zfLyDMexjp6N3orT4fUyk4vlc/qc2vH0q3AwrQdifN4fNR+6Kz2tE2J83h81H7oro1egmC5Mt2184xHn5ffalvBmSVcXh2gQPKJUMaNoGe+gJuLD0ikdtfOMR5+X32o9ibROHxEOIChjHIrhSbAldbE8KxdDX1Lng8VtIAM8Mb3CAyrKrPKFiKM8XyuWaQwJbjYpewa91tubTxTSSRwrGFeJJZBJLFGYxbeyrKRHEySqMshN2cnjaq9hPDrELFJFIc4lzBzfJ1GiMSooUWQLfOMoGoItYmlm8OWMscpikzJEIxlxLqEssS3iASyX6IZlOYMCdONLxl2L3R1hMHjhiWxLQI8skjrkaXK6s0vRloisgdFWU9GJFNhc3NjemG08BisTL0rYYLJLinhOTqh5yblcpay5bhcw00uSTc09w/h0V3YVB8uswQO3RqVlEoMcZuI5NMmdSBlJuppbFfxImfKWw8WZM5U30EskbxvIy2szN0jMQeNuVG0uiBsQcXg1imtliOs7wXuv92MFmQ66GwJvuNjUv/CqJXxbhr2/l3II3g5o9e3upTD/xGlR86wqAzyPLHmOWR5EiQta3UYPF0gIuQWYbjQ/g+tsY4/8A13+546za6Ulppt9i9G3mRt3L/LgXiOZdVPEbm9H0Wp1FiL+URu8r49nbT0nLw0O8cCPjTPEYK3WTd+F/36a8eqkZLc7Slfk7YEXBFxxHZ+ddLp/svDmPiBy3im8M9uqRpy1uv/T+YpZksbrod9xuPb/zwpc6aSuuC3sFi8MHG4Ekcdzjk3xqu4/BZRcXKA638qJuFzxXtqxqb3IG7yl/NfzFFPFmFxbNYjsYHeGHdV6VbB4vgtGTRTWZ0cshBb6SHc6ngf1cKsWzsWk6Bk7uRVhvV+TDnxqN2vgujCuqnLe2v0Cdyn/UjcaZ4YmOTpYzvsJUPEbtRxtwYfEV0JRjUhv+DLySkrolsVAynOuh4/np+PrqB2ngshMkY6n014qeYq44WRZVBuCGHD1VGbR2eynq/wDB7DSqU3Tli/8AZajVs8ZFf2TjuhcG/VN7cBrrr/qfuNXGKTpACNGtcfA+mqXiogCSBZTvXdlPZ30/8G9pZWEDk3J+Sc8/8T30+vSzWcRdeni8o8ExtXAZ1MqCzDy17d1/jVN27s/L8oug423qezuP4kca0KOa3yoB06sq/duqL2xs9Rqouj/df9/iKml1EqckMpzVWDhMqngxtXoJA58i4Eij6J3h0/0P3G1QE7Xdje92Y353JN/TUtjdntHJ1VLAa5Qbm2pIXnpc8+WtQSmvV6SUJLOPU81rqDpzx6Ct60bYfzeHzMfuis2vWlbCP9NB5mP3RWqo+DHFGWba+cYjz83vtTaGNnYKilmY2VVBJJO4ADUnsFOdtfOMR5+b32pbwYxwgxcE7KzLHKjlUF2IU7lB3msvQ0vkZ4zCSRNkljeN9DkdSjWO7qsAbUjerZjPCfDOILYbpMrYdGZ4I1DxxvK7pEmZxEW6SMWU62JNr2rnxvgAiKuFdwOiuxgjBmWPo+ku2cmLyXJKE5s9mtaopPqg4lbwuFklYJFG8jm9ljUuxtvsqgm1cSxMrFXUqwNirAqQRwIOoPfVkj8IIo8ZNiI8MAkmHkiSLohGrOyBOvEr2AJ8oIeINtajfCjaKYnESToZLyOSVkVVyqAqooKk3ygFdw0VeJNim2yNIi6uP8ILfzzg/Z39+OqdVu/hKf6x/MP78dY/Ef8Aiz+xeh/ciawy27RzrgNbtB3iu4ZL6HQ0TxW3ekc+7trwcXd2O1cQngDAEevke340jExXqtproeA9FOB1Tv0P30HivodRw5qe/iKvGo4Oz4Lp7CfaNCNCP3wpxGQ2oFjxFMTdWCnfwPMcj+VLKxBzD0+n8qlSCe8eA22DxcVwTYEEEMp3MDvB/elVjHYbJIFVtdTEzcR9JH5kf81bc2YXG8bx+94qM2tgVdCD5J1VuKMNxrRpa1vRLj/AYOzGGxZ7XIsFJuVP0H0v3Dn6DVhKrKhB5fu3d8KpOExjq+SQESAkf9Vvx01HMG1W7YmIDgEbj9zD8v3yrbKDfP4Faq/7IhNubKuGYAF0FyP81+IqrTJoLbibA31VhrpyP599aZtLDtbMlsw1FxcHmD2VScbg0JbKpyMCWXeQBoSP90J9Kkc60UZ7NS5XP6j6NTOGMv37E14PY5pEzsLyL1ZhbylFwsgHPgw/K1OcUluoNQdV138SPzHbVa2Hi3hnF9WW2YjUSRncwHHTQ+n/ABq142EMtlNgdUN75TvGv3UmrTtLJGV3pT9ivY6HKyOOBBvy4+qs9ka7Mf8AZvxNaTMM63trxAO4jygPeHeedZ7trDtHO6tluTm6u6zdm8ca7XhNbdwZm8VipwjUX2EAa0nYXzaDzMfuiszBrStgfNoPMx+6tdmb4OLFGY7a+cYjz8vvtS/gvj0w+Lw88l8kcqu2UXNl5DjSG2vnGI8/L77U0pdroa+S/f8A1nglMLxQyKYZMRMkYC9abEKtusQVVY2ZgpKnSNNDemGK8IsN0GMhiaULiHkljJQAQFsjmIfSKvZkcqbWWPQ3YVUKFU8tByZo2H8O8EJmkkjkcLjpMVGcg0LrHEAwvuy53sLdZE11rPMQ4Z3YbmdiO4kkXrihVowUeAN3BVk/h1j4oMS8k0qxoIGF2vqxeOwUAXJ3nuBqt0VUq041IOEuGGEnGSkuhs2G8MMDmKfzUei5sxDBSLjQHLYtruFPT4a7OKuf5uMdHYnyrte3kDLd99rLc7+RrDLUK5f8D03v8mh6ubNvn8Ktn6qcXDfQ3DEjUX3gEcfQai//ALhYEEASuRex+TewF7XOmotrpr2cKyS1HV34Npnzf5J9ZPoa/wD/AFts+aydMFzBzmcFMuQgDMbaFt69gN8ulTeHcGQwO6CZI+kdA4LZP8uVrEH76wS1AIKp/BNOlZX+QrWVEbbP4R4GOwfGQ3K30YvoTpqgIv8AfxpzjdrYaFbyYmEAhSvyitcP5JGW91Njru0O6sJAoBRyoLwPT+/yF62ZrOKGBxaoUxkaSNK6Rljb+2CzBuUdrFXJ4jibU42J0L6x7Sw7PqQoIF8nllgxBymxO63EGset2UZUcq0rw2ko47h+uqG2bU8OcEkIl/mFkv5EcVnckaG40KC4Ni1rjnUHP4aYBsjdI65yHIENzGykqQ9jbrKfo5rr6KzGhRXh1G93e/3FrVzXBpGP2zs055Y8Tbo9UQRvmZrX6lwBlO7UjjTofxCwCLbLM5bKTkQLlawzeUdeWnorLr0KsvD6K6P5DPWVZqzZpuy/CnAS9NJJJJEwAYRyAHOV3mMrcZtfIJubacaoe2Md088koFgzaDkAAo4cbX9NMKO9Oo6WnSk5RXImpXnOCjJ7CuatQ8HvmuH8xF7q1ld61HwdP9Lh/MRe4taJMXHgzHbfznEefl99qaVruN2Nh2dicPESXkJJjUkm53m1ceIsL9mh9knwpaky1jJaFa14iwv2aH2SfCh4iwv2aH2SfCjkyYmS0K1rxFhfs0Psk+FDxFhfs0Psk+FTJkxMloVrXiLC/ZofZJ8KHiLC/ZofZJ8KmRMTJaFa14iwv2aH2SfCh4iwv2aH2SfCpkTEyWhWteIsL9mh9knwoeIsL9mh9knwqZExMloVrXiLC/ZofZJ8KHiLC/ZofZJ8KmRMTJaFa14iwv2aH2SfCh4iwv2aH2SfCpkTEyWur1rHiLC/ZofZJ8KHiLC/ZofZJ8KmTJiZPehetYGwsL9mh9knwoeIsL9mh9knwqZExMovQrVxsLC/ZofZJ8K68Q4X7ND7JPhUyZMTJ70dav4hwv2aH2SfCufEWF+zQ+yT4VMmTEyq9ar4O/NcP5iL3FrrxFhfs0Psk+FWXZ+BiEUYEaABF+iOQ7KrKQUj/9k="
          />
          <Product class="product"
            id="23445930"
            title="Operating System"
            price={400}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/51t52QCaxNL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product class="product"
            id="3254354345"
            title="Introduction to Automata Theory, Languages and Computation"
            price={150}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41d4NezeXCL._SX343_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product class="product"
            id="90829332"
            title="Discrete and Combinatorial Mathematics"
            price={300}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81VyD4JjhML.jpgps://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="about_us">
        <h1 class="abt">About Us</h1>
        <h3 class="txt">An investment in knowledge pays the best interest.We are a platform where you can share the college resources you've gathered to help make it easier for other curious minds! We are an eco-friendly solution to all your academic needs. You are welcome to lend, sell and borrow books, notes, and other resources. We offer a wide range of reference books beneficial to college students at affordable prices. It also aims to eliminate the middleman while simultaneously being easy on your wallet. Our mission is to build a community of students who help each other learn and grow. Our website helps bring you one step closer to achieving your goals.We believe that no book should only be read once or have a single owner; this forms the basis of everything we do. We at ReSeLL ensure that the knowledge is passed on to the people who need it.So, why let your old, used books occupy space in your closet? We at ReseLL believe in filling your shelves with affordable books that add to your grades too.If you love books why not ReSeLL them?</h3>
        
          
        </div>
        </div>
        
    </div>
  );
}

export default Home;