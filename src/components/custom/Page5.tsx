'use client'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image'

export default function Page5() {

    const cardClass = {

        maxWidth: 345,
        height: 400,
        background: 'transparent',
        borderRadius: '16px',
        overflow: 'hidden', // Makes sure overlay respects rounded corners
        display: 'flex',
        flexDirection: 'column',

    }

    const glassCardContentStyle = {
        position: 'absolute',
        bottom: 0,
        left: 0,

        width: '100%',
        background: 'rgba(28, 37, 60, 0.54)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(13.7px)',
        WebkitBackdropFilter: 'blur(13.7px)',
        border: '1px solid rgba(28, 37, 60, 0.3)',
        color: 'white',
        padding: '16px',
    };

    const cardImg = { height: 400, width: '100%', objectFit: 'cover' }

    return (

        <div>

            <div className="container flex flex-col justify-center px-20 pt-30  max-w-[964px]">
                <h1 className="text-[40px] font-semibold align-text-top text-center mb-5">Why EC-Council University is Right for You </h1>
                <p className='text-[18px] mb-[50px]'>
                    With ECCU, you’re not just earning a degree – you’re becoming a future-ready cyber security leader. We take your long-term career success just as seriously as delivering an immediate return on your investment.
                    Once you enter the ECCU ecosystem, you’ll have unrestricted access to everything you need to accomplish your cyber security learning goals – a state-of-the-art learning management system (LMS), internationally-renowned faculty, engaging and interactive learning resources, a 24x7 online library housing a vast collection of learning materials, exclusive networking opportunities with like-minded peers and cyber security experts, readily-available academic advisory and career counselling support, and so much more!
                </p>
                <Button
                    className=' w-fit h-full bg-[#9B1C31] hover:bg-[#621421] text-white py-4 cursor-pointer m-auto flex items-center justify-center gap-0.5'
                    onClick={() => { alert("Inquiry Initiated!"); }}
                >
                    Discover the ECCU Advantage
                    <MoveRight className='ml-2' />
                </Button>
            </div>

            <div className="cards px-4 sm:px-6 lg:px-8 py-8">
                {/* Mobile: 1 col | sm: 2 cols | lg: 3 cols */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

                    <Card sx={cardClass}>
                        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardMedia
                                component="img"
                                height="400px"
                                image="/assets/card1.png"
                                alt="green iguana"
                                sx={cardImg}
                            />
                            <CardContent
                                sx={glassCardContentStyle}
                            >
                                <Typography gutterBottom className='text-[20px]' component="div">
                                    Flexible Online Learning
                                </Typography>
                                <Typography variant="body2" className='opacity-[0.7] text-[16px]'>
                                    Graduate with a degree, whether on sabbatical or working full-time.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                    <Card sx={cardClass}>
                        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/assets/card2.png"
                                alt="green iguana"
                                sx={cardImg}
                            />
                            <CardContent
                                sx={glassCardContentStyle}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Hands-on Experience
                                </Typography>
                                <Typography variant="body2">
                                    Develop hands-on expertise with virtual labs and capstone projects
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={cardClass}>
                        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/assets/card3.png"
                                alt="green iguana"
                                sx={cardImg}
                            />
                            <CardContent
                                sx={glassCardContentStyle}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Industry Aligned Curriculum
                                </Typography>
                                <Typography variant="body2">
                                    Get industry-ready with programs built for today’s market needs.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={cardClass}>
                        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/assets/card4.png"
                                alt="green iguana"
                                sx={cardImg}
                            />
                            <CardContent
                                sx={glassCardContentStyle}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Certifications Embedded
                                </Typography>
                                <Typography variant="body2">
                                    Kickstart your career with a degree along with EC-Council certifications.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={cardClass}>
                        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/assets/card5.png"
                                alt="green iguana"
                                sx={cardImg}
                            />
                            <CardContent
                                sx={glassCardContentStyle}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Credit Transfers
                                </Typography>
                                <Typography variant="body2">
                                    Transfer up to 90 credits from prior learning and certifications.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card sx={cardClass}>
                        <CardActionArea sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image="/assets/card6.png"
                                alt="green iguana"
                                sx={cardImg}

                            />
                            <CardContent
                                sx={glassCardContentStyle}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    Learning with Ease
                                </Typography>
                                <Typography variant="body2">
                                    Experience an all-in-one learning platform designed for seamless navigation.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>

        </div>

    )
}

