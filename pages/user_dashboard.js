import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
// import Link from "next/link";
import { AdminProvider } from "../context/AdminContext";
import EditPetModal from "../components/EditPetModal";
import AdminHeader from "../components/AdminHeader";
import styles from "./admin/dashboard.module.css";
import { message } from "../helpers/Message";
import Message from "../components/Message";
import API from "../api_endpoints";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Typography,
  Drawer,
  IconButton,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Chat as ChatIcon,
  People as PeopleIcon,
  Pets as PetsIcon,
  ChildFriendly as ChildFriendlyIcon,
  PlaylistAddCheck as PlaylistAddCheckIcon,
  AttachMoney as AttachMoneyIcon,
  ShoppingBag as ShoppingBagIcon,
  AccountCircle as AccountCircleIcon,
  HourglassBottom as HourglassBottomIcon,
  ExitToAppOutlined as ExitToAppOutlinedIcon,
  Dashboard,
} from "@mui/icons-material";
import Adoption from "./adoption";
import Pricing from "./pricing";

const UserDashboard = () => {
  const [selectedBooking, setselectedBooking] = useState(null);
  const [userInfo, setuserInfo] = useState(null);
  const [bookingList, setbookingList] = useState([]);
  const [msg, setMsg] = useState(message);
  const [selected, setSelected] = useState("Bookings");
  const router = useRouter();

  const handleDelete = (id) => {
    API.delete(`/booking/remove/${id}`)
      .then((response) => {
        const { data } = response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
    window.location.reload();
    setselectedBooking(null);
  };

  const handleEdit = (booking) => {
    setselectedBooking(booking);
  };

  const handlePayment = (booking) => {
    // Navigate to booking page
    localStorage.setItem("booking", JSON.stringify(booking));
    router.push("/payment");
  };

  const handleSave = (booking) => {
    API.patch(`/booking/edit/${booking._id}`, {
      user: userInfo?._id,
      service: booking.service,
      status: booking.status,
      appointmentOn: booking.appointmentOn,
    })
      .then((response) => {
        const { data } = response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
    window.location.reload();
    setselectedBooking(null);
  };

  const loadBookings = useCallback(() => {
    if (userInfo) {
      API.get(`/booking/all/${userInfo?._id}`)
        .then((response) => {
          const { data } = response;
          setbookingList(data.data);
        })
        .catch((error) => {
          const { data } = error.response;
          setMsg({ showMsg: true, success: data.success, text: data.message });
        });
    }
  }, [userInfo?._id]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    setuserInfo(user?.data?.result);
    loadBookings();
  }, [loadBookings]);

  const drawer = (
    <div>
      <List>
        {["Dashboard", "Home", "Adoption", "Pricing", "Bookings"].map((text, index) => (
          <>
            {text === "Home" && (
              <ListItemButton
                key={index}
                onClick={() => {
                  router.push("/");
                }}
              >
                <ListItemIcon>
                  <HomeIcon sx={{ color: "silver" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "silver", position: "relative", left: -15 }} />
              </ListItemButton>
            )}
            {text === "Adoption" && (
              <ListItemButton
                key={index}
                onClick={() => {
                  setSelected("Adoption");
                }}
              >
                <ListItemIcon>
                  <ChildFriendlyIcon sx={{ color: "silver" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "silver", position: "relative", left: -15 }} />
              </ListItemButton>
            )}
            {text === "Pricing" && (
              <ListItemButton
                key={index}
                onClick={() => {
                  setSelected("Pricing");
                }}
              >
                <ListItemIcon>
                  <AttachMoneyIcon sx={{ color: "silver" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "silver", position: "relative", left: -15 }} />
              </ListItemButton>
            )}
            {text === "Bookings" && (
              <ListItemButton
                key={index}
                onClick={() => {
                  setSelected("Bookings");
                }}
              >
                <ListItemIcon>
                  <PetsIcon sx={{ color: "silver" }} />
                </ListItemIcon>
                <ListItemText primary={text} sx={{ color: "silver", position: "relative", left: -15 }} />
              </ListItemButton>
            )}
          </>
        ))}
      </List>
    </div>
  );

  return (
    <div style={{ display: "flex", flexWrap: "nowrap", flexDirection: "row", justifyContent: "space-between" }}>
      <div>
        <Box component="nav">
          <Drawer
            // sx={{ backgroundColor: "#3973ac" }}
            variant="permanent"
            sx={{
              color: "white",
              "& .MuiDrawer-paper": {
                background: "#204060",
              },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
      </div>
      <div style={{ width: "90%" }}>
        {selected === "Home" && true}
        {selected === "Adoption" && <Adoption />}
        {selected === "Pricing" && <Pricing />}
        {selected === "Bookings" && (
          <AdminProvider>
            <AdminHeader />
            <Message data={msg} onChangeData={{ setMsg }} />
            <div className={styles.container}>
              <h1 className="text-3xl font-bold mb-4 text-blue-800">Customer Dashboard</h1>

              <h4 className="text-xl font-bold mb-4 text-blue-700">Booking History</h4>
              <div className={styles.grid}>
                {!bookingList.length && <div>No bookings yet</div>}
                {bookingList.map((booking) => (
                  <div key={booking._id} className={styles.petCard}>
                    <div className={styles.petInfo}>
                      <h6 className={styles.petInfoTitle}>#{booking.service}</h6>
                      {/* <p className={styles.petInfoText}>Status: {booking.status}</p> */}
                      <p className={styles.petInfoText}>Payment: {booking.paymentStatus}</p>
                      <p className={styles.petInfoText}>Appointment Date: {booking.appointmentOn}</p>
                      <div className={styles.actionButtons}>
                        {!userInfo?.isAdmin && booking?.paymentStatus !== "COMPLETED" && (
                          <button
                            className={`${styles.actionButton} ${styles.editButton}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePayment(booking);
                            }}
                          >
                            Pay Now
                          </button>
                        )}
                        <button
                          className={`${styles.actionButton} ${styles.deleteButton}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDelete(booking._id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* {selectedBooking && <EditPetModal booking={selectedBooking} onSave={handleSave} onClose={() => setselectedBooking(null)} />} */}
            </div>
          </AdminProvider>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
