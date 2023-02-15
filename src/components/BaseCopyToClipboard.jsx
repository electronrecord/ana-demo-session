import './css/base-copy-clipboard.scss'

export const BaseCopyToClipboard = function () {
  return (
    <div className='base-copy-clipboard'>
      <i className='mr8'>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1 15H5.9C5.39609 15 4.91282 14.7998 4.5565 14.4435C4.20018 14.0872 4 13.6039 4 13.1V4.9C4 3.85066 4.85066 3 5.9 3H12.1C13.1493 3 14 3.85066 14 4.9V13.1C14 14.1493 13.1493 15 12.1 15ZM5.9 4.8C5.84477 4.8 5.8 4.84477 5.8 4.9V13.1C5.8 13.1552 5.84477 13.2 5.9 13.2H12.1C12.1552 13.2 12.2 13.1552 12.2 13.1V4.9C12.2 4.84477 12.1552 4.8 12.1 4.8H5.9Z" fill="#2A6EBB"/>
          <path d="M1.9 11C2.39706 11 2.8 10.5971 2.8 10.1V1.9C2.8 1.84477 2.84477 1.8 2.9 1.8H9.1C9.59706 1.8 10 1.39706 10 0.9C10 0.402944 9.59706 0 9.1 0H2.9C1.85066 0 1 0.850659 1 1.9V10.1C1 10.3387 1.09482 10.5676 1.2636 10.7364C1.43239 10.9052 1.66131 11 1.9 11Z" fill="#2A6EBB"/>
        </svg>
      </i>
      <span>Copy</span>
    </div>
  )
}
