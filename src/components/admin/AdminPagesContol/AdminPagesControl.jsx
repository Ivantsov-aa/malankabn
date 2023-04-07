import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import Button from "../../Button/button"
import { Input } from "../../Input/Input"
import { Select } from "../../select/select"

import { AdminPagesControlContainer, EditTextPanelContainer } from "./AdminPagesControl.style"

export const AdminPagesControl = (props) => {
    const [value, setValue] = useState('');
    const [editParams, setEditParams] = useState(null);
    const { userInfo } = useSelector(store => store.authAdmin);

    const uploadMedia = async (target, file, uploader) => {
        const fileToRequest = new FormData();
        fileToRequest.append('file', file);

        await fetch('http://92.53.127.30:8080/malanka/image', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${userInfo.token}`
            },
            body: fileToRequest
        })

            // .then(response => console.log(response))
            .then(response => response.json())
            .then(result => {
                target.setAttribute('src', `http://92.53.127.30:8080/malanka/unsecure/image/${result.generatedFilename}`)
                uploader.remove();
            })
    }

    const handleKeyDown = e => {
        const { detail, clientX, clientY, target } = e;
        const tagNames = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'P', 'LI', 'BUTTON', 'SPAN']

        if (tagNames.includes(target.tagName) && detail === 2) {
            setEditParams({ topPos: clientY, leftPos: clientX, target: target });
        }

        if (target.tagName === 'A' && detail === 2) {
            setEditParams({ topPos: clientY, leftPos: clientX, target: target });
        }

        if ((target.tagName === 'IMG' || target.tagName === 'SVG') && detail === 2) {
            const uploader = document.createElement('input');
            uploader.setAttribute('type', 'file');
            uploader.style.position = 'fixed';
            uploader.style.visibility = 'hidden';
            uploader.click();
            uploader.addEventListener('change', () => {
                uploadMedia(target, uploader.files[0], uploader)
            })
        }
    }

    const handleMouseEnter = (event) => {
        const { target } = event;

        if (target.tagName !== 'SECTION') {
            target.classList.add('focused');

            target.addEventListener('mouseleave', () => {
                target.classList.remove('focused');
            })
        }
    }

    useEffect(() => {
        // document.addEventListener('mousemove', handleMouseEnter);
        // window.addEventListener('click', handleKeyDown);

        // return () => {
        //     document.removeEventListener('mousemove', handleMouseEnter);
        //     window.removeEventListener('click', handleKeyDown);
        // }
    }, [])

    const handleSavePage = async () => {
        const DOM = document.querySelector('.news').outerHTML;

        await fetch('http://92.53.127.30:8080/malanka/page', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${userInfo.token}`
            },
            body: new URLSearchParams({ 'body': DOM })
        })
            .then(response => response.json())
            .then(result => console.log(result))
    }

    return (
        <AdminPagesControlContainer>
            <Button primary onClick={handleSavePage}>Сохранить</Button>
            {editParams && <EditTextPanel {...props} {...editParams} value={value} setValue={setValue} setEditParams={setEditParams} />}
        </AdminPagesControlContainer>
    )
}

const EditTextPanel = ({ topPos, leftPos, value, innerWidth, setValue, target, setEditParams }) => {
    const [fontColorValue, setFontColor] = useState(null);
    const [fontWeightValue, setFontWeight] = useState(null);
    const [fontSizeValue, setFontSize] = useState(null);
    const [lineHeightValue, setLineHeight] = useState(null);
    const [targetText, setTargetText] = useState('');
    const styles = window.getComputedStyle(target);

    const editPanelRef = useRef();

    useEffect(() => {
        const fontSizeLarge = styles.getPropertyValue('--lg-fs');
        const fontSizeMedium = styles.getPropertyValue('--md-fs');
        const fontSizeSmall = styles.getPropertyValue('--sm-fs');
        if (innerWidth > 1024) {
            setFontSize(+fontSizeLarge.replace(/px/gi, ''));
        } else if (innerWidth > 768 && innerWidth <= 1024) {
            setFontSize(+fontSizeMedium.replace(/px/gi, ''));
        } else {
            setFontSize(+fontSizeSmall.replace(/px/gi, ''));
        }

        const lineHeightLarge = styles.getPropertyValue('--lg-lh');
        const lineHeightMedium = styles.getPropertyValue('--md-lh');
        const lineHeightSmall = styles.getPropertyValue('--sm-lh');
        if (innerWidth > 1024) {
            setLineHeight(+lineHeightLarge.replace(/px/gi, ''));
        } else if (innerWidth > 768 && innerWidth <= 1024) {
            setLineHeight(+lineHeightMedium.replace(/px/gi, ''));
        } else {
            setLineHeight(+lineHeightSmall.replace(/px/gi, ''));
        }

        setFontWeight(styles.fontWeight);
        setFontColor(styles.color);
        setTargetText(target.innerText);

        document.addEventListener('mousedown', (e) => handleClickOutside(e));
        return () => {
            setValue('');
            document.removeEventListener('mousedown', (e) => handleClickOutside(e))
        }
    }, [target, innerWidth]);

    const handleClickOutside = (e) => {
        if (editPanelRef.current && !editPanelRef.current.contains(e.target)) {
            setEditParams(null);
        }
    }

    return (
        <EditTextPanelContainer style={{ top: innerWidth > 768 ? topPos : 'auto', bottom: innerWidth <= 768 ? 0 : 'auto', left: innerWidth > 768 ? leftPos : 0 }} ref={editPanelRef}>
            <div className='edit-panel__header'>
                <Input type='color' defaultValue={fontColorValue} onChange={(e) => {
                    target.style.color = e.target.value
                }} />
                <Input type='number' defaultValue={fontWeightValue} step='100' min='100' max='900' onChange={(e) => target.style.fontWeight = e.target.value} />
                <Input type='number' defaultValue={fontSizeValue} onChange={(e) => target.style.fontSize = `${e.target.value}px`} />
                <Input type='number' defaultValue={lineHeightValue} onChange={(e) => target.style.lineHeight = `${e.target.value}px`} />
            </div>
            <textarea value={value ? value : targetText} onChange={(e) => {
                setValue(e.target.value);
                target.innerText = e.target.value;
            }} />
            <Button primary onClick={() => setEditParams(null)}>Сохранить</Button>
        </EditTextPanelContainer>
    )
}