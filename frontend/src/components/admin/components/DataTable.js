// author: Nandkumar Kadivar

import React, {useState} from 'react'
import {TableContainer,Table, TableHead, TableRow, TableCell, TableBody, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';
import axios from 'axios';

const DataTable = (props) => {
    const headerData = props.headerData
    const rowData = props.rowData
    const type = props.type
    const token = localStorage.getItem("authToken")

    const [open, setOpen] = useState(false)
    const [selectedProvidor, setSelectedProvider] = useState("")
    const [action, setAction] = useState("")

    const [openBlock, setOpenBlock] = useState(false)
    const [selectedVendor, setSelectedVendor] = useState("")

    const [openUnBlock, setOpenUnBlock] = useState(false)
    const [selectedBlockedVendor, setSelectedBlockedVendor] = useState("")

    const [openBlockConsumer, setOpenBlockConsumer] = useState(false)
    const [selectedConsumer, setSelectedConsumer] = useState("")

    const [openUnBlockConsumer, setOpenUnBlockConsumer] = useState(false)
    const [selectedBlockedConsumer, setSelectedBlockedConsumer] = useState("")

    const openModel = (provider, user_action) => {
        setSelectedProvider(provider)
        setAction(user_action)
        setOpen(true)
    };

    const closeModel = () => {
        setOpen(false)
        setSelectedProvider("")
        setAction("")
    };

    const openBlockModel = (user) => {
        setSelectedVendor(user)
        setOpenBlock(true)
    };

    const closeBlockModel = () => {
        setOpenBlock(false)
        setSelectedVendor("")
    };

    const openUnBlockModel = (user) => {
        // setSelectedVendor(user)
        setSelectedBlockedVendor(user)
        setOpenUnBlock(true)
    };

    const closeUnBlockModel = () => {
        setOpenUnBlock(false)
        setSelectedBlockedVendor("")
    };

    const openBlockModelConsumer = (user) => {
        setSelectedConsumer(user)
        setOpenBlockConsumer(true)
    };

    const closeBlockModelConsumer = () => {
        setOpenBlockConsumer(false)
        setSelectedConsumer("")
    };

    const openUnBlockModelConsumer = (user) => {
        setSelectedBlockedConsumer(user)
        setOpenUnBlockConsumer(true)
    };

    const closeUnBlockModelConsumer = () => {
        setOpenUnBlockConsumer(false)
        setSelectedBlockedConsumer("")
    };

    const requestActionHandler = async() => {
        var id = selectedProvidor.id
        if(action == "approve" && id!=null){
            await axios.post(`http://localhost:3001/admin/approve-vendor/${id}`,{},{headers: {token: "Bearer "+token}}).then((res)=>{
                if(res.data == 'approved'){
                    localStorage.setItem("alert_message","Request Approved Successfully")
                    window.location.href = "/admin/vendor-request"
                }else {
                    alert("Unable to approve vendor")
                }
            }).catch((error)=>{
                alert(error)
            })
        }

        if(action == "reject" && id!=null){
            await axios.post(`http://localhost:3001/admin/reject-vendor/${id}`,{},{headers: {token: "Bearer "+token}}).then((res)=>{
                if(res.data == 'removed'){
                    localStorage.setItem("alert_message","Request Rejected Successfully")
                    window.location.href = "/admin/vendor-request"
                }else {
                    alert("Unable to reject vendor")
                }
            }).catch((error)=>{
                alert(error)
            })
        }

        closeModel()
    }

    const blockVendorHandler = async() => {
        var id = selectedVendor.id
        if(selectedVendor.role == "service-provider"){
            await axios.post(`http://localhost:3001/admin/block-vendor/${id}`,{},{headers: {token: "Bearer "+token}}).then((res)=>{
                if(res.data == 'blocked'){
                    localStorage.setItem("alert_message","Vendor blocked Successfully")
                    window.location.href = "/admin/vendors"
                }else {
                    alert("Unable to block vendor")
                }
            }).catch((error)=>{
                if(error.response.status == 401){
                    window.location.href = "/login"
                }else{
                    alert(error)
                }
            })
        }

        if(selectedVendor.role == "service-consumer"){
            await axios.post(`http://localhost:3001/admin/block-consumer/${id}`,{},{headers: {token: "Bearer "+token}}).then((res)=>{
                if(res.data == 'blocked'){
                    localStorage.setItem("alert_message","Customer blocked Successfully")
                    window.location.href = "/admin/customers"
                }else {
                    alert("Unable to block customer")
                }
            }).catch((error)=>{
                if(error.response.status == 401){
                    window.location.href = "/login"
                }else{
                    alert(error)
                }
            })
        }

        closeBlockModel()
    }

    const unBlockVendorHandler = async() => {
        var id = selectedBlockedVendor.id
        if(selectedBlockedVendor.role == "service-provider"){
            await axios.post(`http://localhost:3001/admin/unblock-vendor/${id}`,{},{headers: {token: "Bearer "+token}}).then((res)=>{
                if(res.data == 'unblocked'){
                    localStorage.setItem("alert_message","Vendor unblocked Successfully")
                    window.location.href = "/admin/vendors"
                }else {
                    alert("Unable to unblock vendor")
                }
            }).catch((error)=>{
                if(error.response.status == 401){
                    window.location.href = "/login"
                }else{
                    alert(error)
                }
            })
        }

        if(selectedBlockedVendor.role == "service-consumer"){
            await axios.post(`http://localhost:3001/admin/unblock-consumer/${id}`,{},{headers: {token: "Bearer "+token}}).then((res)=>{
                if(res.data == 'unblocked'){
                    localStorage.setItem("alert_message","Customer unblocked Successfully")
                    window.location.href = "/admin/customers"
                }else {
                    alert("Unable to unblock customer")
                }
            }).catch((error)=>{
                if(error.response.status == 401){
                    window.location.href = "/login"
                }else{
                    alert(error)
                }
            })
        }

        closeBlockModel()
    }

    return (
        <TableContainer>
            <Table>
                <TableHead className='admin-th'>
                    <TableRow>
                        {headerData.map((data) => (
                            <TableCell align='center'>
                                <div className='admin-th-cell'>{data.label}</div>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((data) => (
                        <TableRow>
                             {
                                data.id &&
                                <TableCell align='center'>
                                    <div>{data.id}</div>
                                </TableCell>
                            }
                            {
                                data.fname &&
                                <TableCell align='center'>
                                    <div>{data.fname}</div>
                                </TableCell>
                            }
                            {
                                data.lname &&
                                <TableCell align='center'>
                                    <div>{data.lname}</div>
                                </TableCell>
                            }
                            {
                                data.gender &&
                                <TableCell align='center'>
                                    <div>{data.gender}</div>
                                </TableCell>
                            }
                            {
                                data.email &&
                                <TableCell align='center'>
                                    <div>{data.email}</div>
                                </TableCell>
                            }
                            {
                                data.city &&
                                <TableCell align='center'>
                                    <div>{data.city}</div>
                                </TableCell>
                            }
                            {
                                data.service &&
                                <TableCell align='center'>
                                    <div>{data.service}</div>
                                </TableCell>
                            }
                            <TableCell align='center'>
                                {
                                    type === 'listing' &&
                                        <div className='d-flex flex-row justify-content-center'>
                                            <Button className='mx-2' variant="outlined" color='error' onClick={()=> openBlockModel(data)}> <BlockIcon /> Block</Button>
                                        </div>
                                }

                                {
                                    type === 'request' &&
                                        <div className='d-flex flex-row justify-content-center'>
                                            <Button className='mx-2' variant="outlined" color='error' onClick={()=> openModel(data,'reject')}>Reject</Button>
                                            <Button className='mx-2' variant="contained" color='success' onClick={()=> openModel(data, 'approve')}>Approve</Button>
                                        </div>
                                }

                                {
                                    type === 'block-listing' &&
                                        <div className='d-flex flex-row justify-content-center'>
                                            <Button className='mx-2' variant="outlined" color='info' onClick={()=> openUnBlockModel(data,'unblock')}>Unblock</Button>
                                        </div>
                                }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>


            <Dialog
                open={open}
                onClose={closeModel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    "Are you sure to {action} request?"
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Service providor Id: {selectedProvidor.id}<br />
                        Service providor Name: {selectedProvidor.fname} {selectedProvidor.lname}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className='admin-cancel-btn' onClick={closeModel}>Cancel</Button>
                <Button className='admin-confirm-btn' variant='contained' onClick={requestActionHandler} autoFocus>
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openBlock}
                onClose={closeBlockModel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    "Are you sure to Block user?"
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {selectedVendor.fname} {selectedVendor.lname} will not be able to use the plateform
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className='admin-cancel-btn' onClick={closeBlockModel}>Cancel</Button>
                <Button className='admin-confirm-btn' variant='contained' onClick={blockVendorHandler} autoFocus>
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openUnBlock}
                onClose={closeUnBlockModel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    "Are you sure to unblock user?"
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {selectedBlockedVendor.fname} {selectedBlockedVendor.lname} will be able to use the plateform
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className='admin-cancel-btn' onClick={closeUnBlockModel}>Cancel</Button>
                <Button className='admin-confirm-btn' variant='contained' onClick={unBlockVendorHandler} autoFocus>
                    Unblock
                </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openBlockConsumer}
                onClose={closeBlockModelConsumer}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    "Are you sure to Block user?"
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {selectedConsumer.fname} {selectedConsumer.lname} will not be able to use the plateform
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className='admin-cancel-btn' onClick={closeBlockModelConsumer}>Cancel</Button>
                <Button className='admin-confirm-btn' variant='contained' onClick={closeBlockModelConsumer} autoFocus>
                    Confirm
                </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openUnBlockConsumer}
                onClose={closeUnBlockModelConsumer}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    "Are you sure to unblock user?"
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {selectedBlockedConsumer.fname} {selectedBlockedConsumer.lname} will be able to use the plateform
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button className='admin-cancel-btn' onClick={closeUnBlockModelConsumer}>Cancel</Button>
                <Button className='admin-confirm-btn' variant='contained' onClick={closeUnBlockModelConsumer} autoFocus>
                    Unblock
                </Button>
                </DialogActions>
            </Dialog>
    </TableContainer>
  )
}

export default DataTable
