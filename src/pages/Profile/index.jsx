import { useState } from 'react';
import { Pencil, Plus, ChevronRight, Bell, CreditCard, Download, Trash2, MapPin } from 'lucide-react';

const tabs = [
    { name: 'My Profile', icon: Pencil },
    { name: 'Security', icon: Bell },
    { name: 'Teams', icon: ChevronRight },
    { name: 'Team Member', icon: ChevronRight },
    { name: 'Notification', icon: Bell },
    { name: 'Billing', icon: CreditCard },
    { name: 'Data Export', icon: Download },
    { name: 'Delete Account', icon: Trash2 },
];

const TabButton = ({ name, icon: Icon, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center px-4 py-3 rounded-md text-left transition duration-300 ease-in-out ${isActive
            ? 'bg-blue-50 text-blue-600 font-medium'
            : 'text-gray-600 hover:bg-gray-100'
            }`}
    >
        <Icon className="w-5 h-5 mr-3" />
        {name}
    </button>
);

const ProfileHeader = ({ name, title, location }) => (
    <div className="flex items-center gap-5 ">
        <img
            src="https://avatars.githubusercontent.com/u/100450408?v=4"
            alt={name}
            className="w-24 h-24 rounded-full mr-6 border-4 border-blue-100"
        />
        <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-1">{name}</h2>
            <p className="text-gray-600 mb-1">{title}</p>
            <p className="text-gray-500 text-sm flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                {location}
            </p>
        </div>
    </div>
);

const Section = ({ title, children, onEdit }) => (
    <div className="bg-white rounded-lg shadow-sm p-6 transition duration-300 ease-in-out hover:shadow-md">
        <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            {onEdit && (
                <button className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out flex items-center">
                    <Pencil className="w-5 h-5 mr-1" />
                    <span>Edit</span>
                </button>
            )}
        </div>
        {children}
    </div>
);

export default function Profile() {
    const [activeTab, setActiveTab] = useState('My Profile');

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Users</h1>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex items-center transition duration-300 ease-in-out transform hover:scale-105">
                        <Plus className="w-5 h-5 mr-2" />
                        Add Users
                    </button>
                </header>

                <div className="flex gap-8">
                    {/* Sidebar */}
                    <aside className="w-72">
                        <nav className="space-y-1 bg-white rounded-lg shadow-sm p-2">
                            {tabs.map((tab) => (
                                <TabButton
                                    key={tab.name}
                                    name={tab.name}
                                    icon={tab.icon}
                                    isActive={activeTab === tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                />
                            ))}
                        </nav>
                    </aside>

                    {/* Main content */}
                    <main className="flex-1 space-y-6">
                        <Section title="Profile" onEdit={() => console.log('Edit profile')}>
                            <ProfileHeader
                                name="Ahmed Mohamed"
                                title="Front-end Developer"
                                location="Cairo, Egypt  "
                            />
                        </Section>

                        <Section title="Personal Information" onEdit={() => console.log('Edit info')}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">Jack</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">Adams</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Email address</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">jackadams@gmail.com</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Phone</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">(213) 555-1234</p>
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Bio</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">
                                        Product Designer with 5+ years of experience in creating intuitive and
                                        user-friendly interfaces for web and mobile applications.
                                    </p>
                                </div>
                            </div>
                        </Section>

                        <Section title="Address" onEdit={() => console.log('Edit address')}>
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Country</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">United States of America</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">City/State</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">California, USA</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Postal Code</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">ERT 62574</p>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">TAX ID</label>
                                    <p className="text-gray-800 bg-gray-50 p-2 rounded">AS564178969</p>
                                </div>
                            </div>
                        </Section>

                        <Section title="Account Settings">
                            <div className="space-y-4">
                                <SettingItem
                                    title="Two-factor Authentication"
                                    description="Add an extra layer of security to your account"
                                    action="Enabled"
                                    actionClass="bg-green-100 text-green-600"
                                />
                                <SettingItem
                                    title="Login History"
                                    description="View your recent login activity"
                                    action="View"
                                />
                                <SettingItem
                                    title="Connected Accounts"
                                    description="Manage your linked accounts and services"
                                    action="Manage"
                                />
                            </div>
                        </Section>
                    </main>
                </div>
            </div>
        </div>
    );
}

const SettingItem = ({ title, description, action, actionClass = "text-blue-500 hover:text-blue-600" }) => (
    <div className="flex items-center justify-between py-3 border-b">
        <div>
            <h4 className="font-medium text-gray-800">{title}</h4>
            <p className="text-sm text-gray-500">{description}</p>
        </div>
        <button className={`${actionClass} px-3 py-1 rounded-full text-sm font-medium`}>
            {action}
        </button>
    </div>
);
