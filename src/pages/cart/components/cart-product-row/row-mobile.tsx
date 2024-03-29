import { IoMdTrash } from 'react-icons/io'
import { PiMinusCircleBold, PiPlusCircleBold } from 'react-icons/pi'
import { ProductInfo, ProductQtdAndSubtotal, ProductRowMobile } from './styles'

export function RowMobile() {
  return (
    <>
      <ProductRowMobile>
        <img
          src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
          alt=""
        />
        <div>
          <ProductInfo>
            <p>Homem Aranha</p>
            <span>R$ 29,99</span>
            <button>
              <IoMdTrash size={24} />
            </button>
          </ProductInfo>

          <ProductQtdAndSubtotal>
            <div>
              <button>
                <PiMinusCircleBold size={18} />
              </button>
              <input type="number" />
              <button>
                <PiPlusCircleBold size={18} />
              </button>
            </div>

            <div>
              <strong>SUBTOTAL</strong>
              <span>R$ 29,99</span>
            </div>
          </ProductQtdAndSubtotal>
        </div>
      </ProductRowMobile>
    </>
  )
}
