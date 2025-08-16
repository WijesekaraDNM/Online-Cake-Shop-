import React from 'react'

export default function Title({display, title, fontSize, margin,color, justifyContent, alignItems}) {
  return <h1 style={{display, fontSize,margin,color, justifyContent, alignItems}}>{title}</h1>
}
