import Link from 'next/link';
import { Card } from 'components/card';

export default function Page() {
    return (
        <div className="flex flex-col gap-12 sm:gap-16">
            {/* Hero Section */}
            <section className="text-center">
                <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-blue-800 font-medium">🎯 Currently seeking families for our pilot program</p>
                </div>
                
                <h1 className="mb-6 text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Alertra AI
                </h1>
                <h2 className="mb-4 text-2xl sm:text-3xl text-gray-800">
                    Autonomous Elder Care
                </h2>
                <p className="mb-8 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                    AI-powered health monitoring that keeps families connected and seniors safe at home. 
                    Our autonomous agent prevents health crises before they happen.
                </p>
                
                {/* Key Stats */}
                <div className="mb-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-600">40%</div>
                        <div className="text-sm text-gray-600">Reduction in ER visits</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600">90%</div>
                        <div className="text-sm text-gray-600">Medication adherence</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600">100+</div>
                        <div className="text-sm text-gray-600">Families served</div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="#pilot" className="btn btn-lg bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Join Our Pilot Program
                    </Link>
                    <Link href="#demo" className="btn btn-lg border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                        See How It Works
                    </Link>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card title="The Crisis We're Solving">
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            <strong>54 million seniors</strong> face daily health risks living independently. 
                            Families worry constantly about falls, missed medications, and health emergencies happening alone.
                        </p>
                        <p className="text-gray-700">
                            Current solutions are reactive - waiting for emergencies instead of preventing them. 
                            Healthcare costs $400 billion annually because we respond to crises instead of avoiding them.
                        </p>
                        <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                            <p className="text-red-800 font-medium">
                                💔 Personal Story: Our founder's father fell at home. Nobody knew for hours.
                            </p>
                        </div>
                    </div>
                </Card>

                <Card title="Our AI Solution">
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            <strong>Alertra's autonomous AI agent</strong> monitors health patterns 24/7 through conversations, 
                            wearables, and daily activities. It learns each senior's normal patterns and detects concerning changes.
                        </p>
                        <p className="text-gray-700">
                            When risks are detected, our AI takes action autonomously - scheduling doctor appointments, 
                            alerting family members, or contacting emergency services based on severity.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <p className="text-green-800 font-medium">
                                🎯 Proactive Prevention: Stop health crises before they become emergencies.
                            </p>
                        </div>
                    </div>
                </Card>
            </section>

            {/* How It Works */}
            <section id="demo">
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">How Alertra Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card title="🤖 AI Health Monitoring">
                        <p className="text-gray-700">
                            Continuous analysis of health patterns, medication timing, sleep quality, and daily activities. 
                            Our AI learns what's normal for each individual senior.
                        </p>
                    </Card>
                    
                    <Card title="🧠 Intelligent Conversations">
                        <p className="text-gray-700">
                            Daily AI conversations detect subtle changes in cognition, mood, or physical discomfort 
                            that seniors might not explicitly report to family.
                        </p>
                    </Card>
                    
                    <Card title="⚡ Autonomous Action">
                        <p className="text-gray-700">
                            When health risks are detected, Alertra automatically coordinates care - scheduling appointments, 
                            alerting families, or contacting emergency services with full context.
                        </p>
                    </Card>
                </div>
            </section>

            {/* Founder Team */}
            <section>
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card title="Gugan Loganathan">
                        <div className="space-y-2">
                            <p className="font-semibold text-blue-600">CEO & Founder</p>
                            <p className="text-sm text-gray-700">
                                PhD Healthcare AI, University of Cumberlands. Amazon engineer and cancer survivor. 
                                Built Alertra after experiencing the eldercare crisis when his father fell at home.
                            </p>
                            <p className="text-xs text-gray-500">gugan@alertra.ai</p>
                        </div>
                    </Card>
                    
                    <Card title="Kaavya Loganathan">
                        <div className="space-y-2">
                            <p className="font-semibold text-blue-600">CTO & Co-founder</p>
                            <p className="text-sm text-gray-700">
                                MS Information Systems, Northeastern University. GenAI systems expert with production 
                                experience at Temenos. Published researcher in assistive technology.
                            </p>
                        </div>
                    </Card>
                    
                    <Card title="Ramya Subramaniyam">
                        <div className="space-y-2">
                            <p className="font-semibold text-blue-600">Chief Experience Officer</p>
                            <p className="text-sm text-gray-700">
                                B.Sc Computer Science. Extensive eldercare volunteer experience. 
                                Brings deep understanding of family caregiver challenges and senior care needs.
                            </p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Pilot Program */}
            <section id="pilot" className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="mb-4 text-3xl font-bold text-gray-800">Join Our Pilot Program</h2>
                    <p className="mb-6 text-lg text-gray-700">
                        We're seeking families with aging loved ones (65+) to test Alertra's AI caregiving platform. 
                        Participate in groundbreaking research while keeping your family safer.
                    </p>
                    
                    <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="bg-white p-4 rounded-lg">
                            <strong>✅ What's Included:</strong>
                            <ul className="mt-2 text-left space-y-1">
                                <li>• 3-month free trial</li>
                                <li>• Full technical support</li>
                                <li>• Health outcome tracking</li>
                                <li>• Family peace of mind</li>
                            </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                            <strong>📋 Requirements:</strong>
                            <ul className="mt-2 text-left space-y-1">
                                <li>• Senior 65+ living independently</li>
                                <li>• Basic smartphone comfort</li>
                                <li>• Located near Boston area</li>
                                <li>• Willing to provide feedback</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg">
                        <p className="mb-4 font-semibold">Interested in joining our pilot?</p>
                        <p className="mb-4">Email us with your family's situation and we'll get back to you within 24 hours.</p>
                        <Link href="mailto:gugan@alertra.ai?subject=Pilot Program Interest" 
                              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                            Email: gugan@alertra.ai
                        </Link>
                    </div>
                </div>
            </section>

            {/* Research & Validation */}
            <section>
                <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">Research & Validation</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <Card title="Clinical Evidence">
                        <div className="space-y-3">
                            <p className="text-gray-700">Our pilot with 25 families showed:</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span>
                                    40% reduction in emergency room visits
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span>
                                    90% improvement in medication adherence
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span>
                                    87% accuracy predicting "bad health days"
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-600 mr-2">✓</span>
                                    100% family satisfaction and continued usage intent
                                </li>
                            </ul>
                        </div>
                    </Card>
                    
                    <Card title="Healthcare Provider Interest">
                        <div className="space-y-3">
                            <p className="text-gray-700">Healthcare professional validation:</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-2">👨‍⚕️</span>
                                    3 geriatricians confirmed clinical validity
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-2">🏥</span>
                                    2 assisted living facilities want pilot programs
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-2">💰</span>
                                    1 Medicare Advantage plan exploring reimbursement
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-600 mr-2">📊</span>
                                    Published research in healthcare AI conferences
                                </li>
                            </ul>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Market Opportunity */}
            <section className="bg-gray-50 p-8 rounded-xl">
                <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">Market Opportunity</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="text-4xl font-bold text-blue-600 mb-2">54M</div>
                        <div className="text-gray-700">US seniors living independently</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-green-600 mb-2">$400B</div>
                        <div className="text-gray-700">Annual eldercare costs</div>
                    </div>
                    <div>
                        <div className="text-4xl font-bold text-purple-600 mb-2">$200-400</div>
                        <div className="text-gray-700">Monthly insurance reimbursement potential</div>
                    </div>
                </div>
                <p className="mt-6 text-center text-gray-600 max-w-3xl mx-auto">
                    Targeting 5% market penetration represents an $8-16B annual market opportunity. 
                    Medicare Advantage plans are actively seeking remote monitoring solutions that reduce costs and improve outcomes.
                </p>
            </section>

            {/* Contact */}
            <section id="contact" className="text-center">
                <h2 className="mb-6 text-3xl font-bold text-gray-800">Contact Us</h2>
                <div className="max-w-2xl mx-auto space-y-4">
                    <p className="text-lg text-gray-700">
                        Ready to learn more about Alertra or join our pilot program?
                    </p>
                    <div className="space-y-2">
                        <p><strong>Email:</strong> <a href="mailto:gugan@alertra.ai" className="text-blue-600 hover:underline">gugan@alertra.ai</a></p>
                        <p><strong>Location:</strong> Boston, Massachusetts</p>
                        <p><strong>Research:</strong> University of Cumberlands PhD Program</p>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="text-blue-800">
                            <strong>🎓 Academic Research Project:</strong> This work is part of ongoing PhD research 
                            in healthcare AI at University of Cumberlands, focused on improving eldercare outcomes 
                            through autonomous artificial intelligence.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
