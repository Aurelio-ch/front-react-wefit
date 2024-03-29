import { IoMdTrash } from 'react-icons/io'
import { PiMinusCircleBold, PiPlusCircleBold } from 'react-icons/pi'
import { ContainerDefault, Product, ProductQtd } from './styles'

export function RowDefault() {
  return (
    <ContainerDefault>
      <Product>
        <img
          src="https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
          alt=""
        />
        <div>
          <p>Homem Aranha</p>
          <span>R$ 29,99</span>
        </div>
      </Product>
      <ProductQtd>
        <div>
          <button>
            <PiMinusCircleBold size={18} />
          </button>
          <input type="number" />
          <button>
            <PiPlusCircleBold size={18} />
          </button>
        </div>
      </ProductQtd>
      <td>R$ 29,99</td>
      <td>
        <button>
          <IoMdTrash size={24} />
        </button>
      </td>
    </ContainerDefault>
  )
}
