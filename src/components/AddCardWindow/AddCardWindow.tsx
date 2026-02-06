import React, { FC } from 'react'

interface AddCardProps {
    handleAdd: (e: React.FormEvent) => void
    text: string
    setText: (value: string) => void
    desc: string
    setDesc: (value: string) => void
    isWindowOpen: boolean
}
export const AddCardWindow: FC<AddCardProps> = ({
    desc,
    setDesc,
    handleAdd,
    text,
    setText,
    isWindowOpen,
}: AddCardProps) => {
    if (!isWindowOpen) return null

    return (
        <form onSubmit={handleAdd}>
            <div>
                <h1>Create card</h1>
            </div>

            <span>
                <hr className='line' />
            </span>

            <div>
                <h3>Название</h3>
                <input
                    placeholder='Напиши название'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    type='text'
                />
                <h3>Описание</h3>
                <textarea
                    placeholder='Описание'
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />
                <div>
                    <button type='submit' onSubmit={handleAdd}>
                        Create
                    </button>
                </div>
            </div>
        </form>
    )
}
