import classNames from 'classnames'
import { observer, Observer } from 'mobx-react-lite'
import {useContext} from 'react'
import ReactDOM from 'react-dom'
import './index.less'
import {MobXProviderContext} from 'mobx-react'

const loadingImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjM3N0E5MkZEQThBQzExRTY4MTU0REIwRDc0NDgwNzE0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjM3N0E5MkZFQThBQzExRTY4MTU0REIwRDc0NDgwNzE0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Mzc3QTkyRkJBOEFDMTFFNjgxNTREQjBENzQ0ODA3MTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Mzc3QTkyRkNBOEFDMTFFNjgxNTREQjBENzQ0ODA3MTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5l3KyxAAACUUlEQVR42sxYa2vjMBCUZMexL23T1x0c3P//Ze3B0X4IbR6OElsnhVlYFilx4qh0YWixbGm0u5pdRavzrPS48fjhMfWoPAzGnIf1+OvReezxbPDEQyws/OhxmxjXQO0xARTIWBAbRSTs+NcRAqeMSAVCrUd/CZE5SBRqvIV1ZiCzS7k0Zs9A7N3g6iWwZW4vkBMlkNrAFjhJ5Akk5NjG481jPdALBXKmiKzXSjJysTuP32I87PKfx2JEnjSJjVnOmn/wR3wQ3P6CMFxqPZJ1IuYukS+HI27YwE/mAZrgFczHWtjQis2tsXZDLxCRBkKlmDi9XYkEJ9MKr0zo5BKR+0j8Fur6ZhEmblMiUsAbjrnuXeWzVhyGIJraQGjki5uMRPbIPx6iihKGF6elym9WKm/JCpRj+ZHbZJ4YTiTFNod1UlNKoR3qWIW8osk+RRv1TcwIDzihtjnX1QyHBzuhIdUXEJEtQmcijUr9BUTKGJENC4tDf5rbahGavUGj40SfmtMrk0horMGZXouEvc9IZCY0JOhWXzCBuREx7DKIW816EApLKCm9SRQ68sr0yiG5jXhjJ4+RFV7RYL8dckEaQGLONIrU/IPysxDS3rFT4/DBDGOXhqkBCdk8f3LpKBIFrxaeqYH9Gd6pQKCJjC1llddHbnnzSIFy2EXLbm09k+0SeVWLUiH7nfXQmx4dswfxjkv8PfWM/v9M9TvH7rU7MKdO241IVotmPJlneuBEUxy9+ozd0z13NSTR9Zk7ox63gqcMy4WO/UBjT/0MIe2/AAMAltWgupE8eR8AAAAASUVORK5CYII='
const Loading = () => {
  const loadingRoot =  document.getElementById('loading')
  const {store} = useContext(MobXProviderContext)

  return(
    <>
      {
        ReactDOM.createPortal((
          <div className={classNames({
            loading: true,
            show: store.loading
          })}>
            <img id="loading-img" src={loadingImg} />
          </div>
        ), loadingRoot)
      }
    </>
  )
}

export default observer(Loading)