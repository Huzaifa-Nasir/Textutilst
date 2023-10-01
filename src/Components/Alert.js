import React from 'react'
//import PropTypes from 'prop-types'


export default function Alert(props) {
    function upper(word)
    {
          const lower = word.toLowerCase();
          return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    
    props.alert &&  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{backgroundColor:props.mode==='dark'?'rgb(71, 71, 226)':'palegreen' && props.blMode==='blue'?'#343a40':'palegreen' ,color:props.blMode==='blue'?'white':'black'}}>
  <strong>{upper(props.alert.type) }</strong> : {props.alert.msg}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
  )
}
