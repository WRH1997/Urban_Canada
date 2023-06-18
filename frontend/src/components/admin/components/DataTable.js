import React, {useState} from 'react'
import {TableContainer,Table, TableHead, TableRow, TableCell, TableBody, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';

const DataTable = (props) => {
    const headerData = props.headerData
    const rowData = props.rowData
    const type = props.type

    const [open, setOpen] = useState(false)
    const [selectedProvidor, setSelectedProvider] = useState("")
    const [action, setAction] = useState("")

    const [openBlock, setOpenBlock] = useState(false)
    const [selectedVendor, setSelectedVendor] = useState("")

    const [openUnBlock, setOpenUnBlock] = useState(false)
    const [selectedBlockedVendor, setSelectedBlockedVendor] = useState("")

    const openModel = (name, user_action) => {
        setSelectedProvider(name)
        setAction(user_action)
        setOpen(true)
    };

    const closeModel = () => {
        setOpen(false)
        setSelectedProvider("")
        setAction("")
    };

    const openBlockModel = (name) => {
        setSelectedVendor(name)
        setOpenBlock(true)
    };

    const closeBlockModel = () => {
        setOpenBlock(false)
        setSelectedVendor("")
    };

    const openUnBlockModel = (name) => {
        setSelectedVendor(name)
        setOpenBlock(true)
    };

    const closeUnBlockModel = () => {
        setOpenUnBlock(false)
        setSelectedBlockedVendor("")
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {headerData.map((data) => (
                            <TableCell align='center'>
                                <div>{data.label}</div>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((data) => (
                        <TableRow>
                            {
                                data.name !== null &&
                                <TableCell align='center'>
                                    <div>{data.name}</div>
                                </TableCell>
                            }
                            <TableCell align='center'>
                                <div>{data.email}</div>
                            </TableCell>
                            <TableCell align='center'>
                                <div>{data.city}</div>
                            </TableCell>
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
                                            <Button className='mx-2' variant="outlined" color='error' onClick={()=> openBlockModel(data.name)}> <BlockIcon /> Block</Button>
                                        </div>
                                }

                                {
                                    type === 'request' &&
                                        <div className='d-flex flex-row justify-content-center'>
                                            <Button className='mx-2' variant="outlined" color='error' onClick={()=> openModel(data.name,'rejact')}>Reject</Button>
                                            <Button className='mx-2' variant="contained" color='success' onClick={()=> openModel(data.name, 'approve')}>Approve</Button>
                                        </div>
                                }

                                {
                                    type === 'block-listing' &&
                                        <div className='d-flex flex-row justify-content-center'>
                                            <Button className='mx-2' variant="outlined" color='info' onClick={()=> openUnBlockModel(data.name,'unblock')}>Unblock</Button>
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
                        Service providor: {selectedProvidor}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={closeModel}>Cancel</Button>
                <Button variant='contained' onClick={closeModel} autoFocus>
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
                    {selectedVendor} will not be able to use the plateform
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={closeBlockModel}>Cancel</Button>
                <Button variant='contained' onClick={closeBlockModel} autoFocus>
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
                    {selectedBlockedVendor} will be able to use the plateform
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={closeUnBlockModel}>Cancel</Button>
                <Button variant='contained' onClick={closeUnBlockModel} autoFocus>
                    Unblock
                </Button>
                </DialogActions>
            </Dialog>
    </TableContainer>
  )
}

export default DataTable
